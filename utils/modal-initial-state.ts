import { Modal } from "@/types/ui/modal";

export const createModalState = (
  type: Modal["type"] = null,
  status: Modal["status"] = false,
  text: Modal["text"] = "",
): Modal => ({
  type,
  status,
  text,
});

// Initial state helper
export const modalInitialState = (text = ""): Modal => ({
  type: null,
  status: false,
  text,
});

// Predefined states
export const MODAL_STATES = {
  initial: (): Modal => modalInitialState(),
  success: (text: string): Modal => createModalState("success", true, text),
  error: (text: string): Modal => createModalState("error", true, text),
  warning: (text: string): Modal => createModalState("warning", true, text),
  closed: (): Modal => createModalState(null, false, ""),
} as const;

export type ModalStates = (typeof MODAL_STATES)[keyof typeof MODAL_STATES];
