import { PageContext } from "../../hooks/usePage.tsx";
import CreateRetroPage from "./CreateRetroPage.tsx";
import {QRCodePage} from "./QRCodePage.tsx";
import {useState} from "react";

const HostPage = () => {
  const [roomId, setRoomId] = useState<string>('');
  const [page, setPage] = useState<number>(0);

  return <PageContext.Provider value={{page, setPage}}>
    <div className={"container"}>
      <div className="modal is-active">
        <div className="modal-content">
          {page === 0 && <CreateRetroPage setRoomId={setRoomId}/>}
          {page === 1 && <QRCodePage roomId={roomId}/>}
        </div>
      </div>
    </div>
  </PageContext.Provider>
}

export default HostPage;