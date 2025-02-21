import React, { useState } from "react";
import { Edit2, Eye, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { setDeleteModal, setOpenCustomModal, setSelectedData} from "../Redux/slice/sharedSlice";

import DeleteModal from "../component/Modal/DeleteModal";
import DetailModal from "../component/Modal/DetailModal";

const Grid = ({ data }) => {
  const dispatch = useDispatch();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleRowClick = (row) => {
    setSelectedDetail(row);
    setIsDetailOpen(true);
  };

  const handleOpenEdit = () => {
    dispatch(setOpenCustomModal(true));
  };

  const handleDelete = (id) => {
    dispatch(setDeleteModal({ open: true, id }));
  };
  const handleRowAction = (row) => {
    console.log(row);
    
    dispatch(setSelectedData(row));
  };

  return (
    <div className="rounded-t-[20px] border px-3 bg-white overflow-auto h-[calc(100dvh-160px)]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="sticky top-0 z-10 h-12 bg-white">
            <th className="p-3 text-left border-b">ID</th>
            <th className="p-3 text-left border-b">Title</th>
            <th className="p-3 text-center border-b">Completed</th>
            <th className="p-3 text-center border-b">Actions</th>
          </tr>
        </thead>
        {data && data.length > 0 ? (
          <tbody>
            {data.map((task) => (
              <tr
                key={task.id}
                className="text-center cursor-pointer hover:bg-gray-100 h-14" onClick={() => handleRowAction(task)}
              >
                <td className="p-3 text-left border-b">{task.id}</td>
                <td className="p-3 text-left border-b">{task.title}</td>
                <td className="p-3 border-b">
                  <button
                    className={`px-3 py-1 w-[150px] rounded-[23px] text-white ${task.completed ? "bg-green-500" : "bg-red-500"}`}
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </button>
                </td>

                <td className="p-1 border-b">
                  <button
                    className="p-1 text-blue-500 hover:text-blue-700"
                    onClick={() => handleRowClick(task)}
                  >
                    <Eye size={20} />
                  </button>
                  <button className="p-4 text-blue-500 hover:text-blue-700" onClick={handleOpenEdit}>
                    <Edit2 size={20} />
                  </button>
                  <button className="p-1 text-red-500 hover:text-red-700" onClick={() => handleDelete(task.id)}>
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot>
            <tr>
              <td colSpan={4} className="p-4 text-center text-gray-500">
                No data available
              </td>
            </tr>
          </tfoot>
        )}
      </table>

      <DeleteModal />
      {isDetailOpen && <DetailModal data={selectedDetail} onClose={() => setIsDetailOpen(false)} />}
    </div>
  );
};

export default Grid;
