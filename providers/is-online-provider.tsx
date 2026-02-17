"use client";
import { useOnline } from "@reactuses/core";
import { useModal } from "@/hooks/useModal";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import CustomModal from "@/components/_ui/CustomModal";
import ClientOnly from "@/components/util/client-only";

type Props = {
  children: Readonly<React.ReactNode>;
};
const IsOnlineProvider = ({ children }: Props) => {
  const isOnline = useOnline();
  const { modal, showError, closeModal } = useModal();

  const t = useTranslations();

  useEffect(() => {
    if (!isOnline) {
      showError(t("disconnected"));
    }
  }, [isOnline, showError, t]);

  return (
    <ClientOnly>
      <div>
        {children}
        <CustomModal modal={modal} closeFn={closeModal} />
      </div>
    </ClientOnly>
  );
};

export default IsOnlineProvider;
