"use client";
import { useCallback, useState } from "react";
import { Modal, ModalType } from "@/types/ui/modal";
import { MODAL_STATES } from "@/utils/modal-initial-state";

export const useModal = () => {
  const [modal, setModal] = useState<Modal>(MODAL_STATES.initial());

  const showModal = useCallback((type: ModalType, text: string) => {
    setModal({ type, status: true, text });
  }, []);

  const showSuccess = useCallback((text: string) => {
    setModal(MODAL_STATES.success(text));
  }, []);

  const showError = useCallback((text: string) => {
    setModal(MODAL_STATES.error(text));
  }, []);

  const showWarning = useCallback((text: string) => {
    setModal(MODAL_STATES.warning(text));
  }, []);

  const closeModal = useCallback(() => {
    setModal(MODAL_STATES.closed());
  }, []);

  return {
    modal,
    showModal,
    showSuccess,
    showError,
    showWarning,
    closeModal,
  };
};
