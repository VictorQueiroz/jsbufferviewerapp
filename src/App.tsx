import { Editor } from "@monaco-editor/react";
import { ChangeEvent, useCallback, useContext, useRef, useState } from "react";
import ClientContext from "./ClientContext";
import { GenerateFiles, generatedFile } from "./schema/schema";
import useDebounce from "./useDebounce";

interface IEditor {
  setValue(value: string): void;
}

function App() {
  const client = useContext(ClientContext);
  const debounce = useDebounce(1000);
  const [files, setFiles] = useState<generatedFile[]>([]);
  const [failure, setFailure] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const outputEditorRef = useRef<IEditor | null>(null);
  const onOutputEditorMount = useCallback((editor: IEditor) => {
    outputEditorRef.current = editor;
  }, []);
  const [selectedFile, setSelectedFile] = useState("");
  const onChangeSelectedFile = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const file = files.find((f) => f.path === e.target.value);
      if (file) {
        setSelectedFile(file.path);
      } else {
        setSelectedFile("");
      }
    },
    [files]
  );
  const onChangeInputEditor = useCallback(
    (value: string | undefined) => {
      if (!client || !value) {
        return;
      }
      debounce.run(() => {
        setIsLoading(true);
        setFailure(null);
        client
          .sendMessage(
            GenerateFiles({
              contents: value,
            })
          )
          .then((result) => {
            switch (result._name) {
              case "schema.errorParsingError":
              case "schema.errorDetailedParsingError":
                setFailure("parsing error. please check your type code");
                break;
              case "schema.errorInternalServerError":
                setFailure("internal server error");
                break;
              case "schema.generatedFiles": {
                const firstFile = result.files[0];
                if (firstFile) setSelectedFile(firstFile.path);
                setFiles(Array.from(result.files));
                break;
              }
            }
          })
          .finally(() => {
            setIsLoading(false);
          });
      });
    },
    [setFiles, client, debounce]
  );
  if (!client) {
    return null;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          {failure !== null ? (
            <div className="alert alert-danger mb-3">{failure}</div>
          ) : null}
          <Editor
            theme="vs-dark"
            className="my-3"
            height="90vh"
            onChange={onChangeInputEditor}
          />
        </div>
        <div className="col-lg-6">
          <select
            value={selectedFile}
            className="form-select mb-3"
            onChange={onChangeSelectedFile}
          >
            <option>{isLoading ? "parsing..." : ""}</option>
            {files.map((f) => (
              <option key={f.path}>{f.path}</option>
            ))}
          </select>
          <Editor
            value={files.find((f) => f.path === selectedFile)?.contents ?? ""}
            theme="vs-dark"
            language="typescript"
            onMount={onOutputEditorMount}
            height="90vh"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
