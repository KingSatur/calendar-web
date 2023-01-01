import { useDispatch, useSelector } from "react-redux";
import { setIsCreateEventModalOpen } from "../store/ui/uiSlice";

export const useUiStore = () => {
  const { isCreateEventModalOpen } = useSelector((state) => state?.ui);
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(setIsCreateEventModalOpen(true));
  };

  const closeModal = () => {
    dispatch(setIsCreateEventModalOpen(false));
  };

  return {
    isCreateEventModalOpen,
    openModal,
    closeModal,
  };
};
