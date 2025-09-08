"use client"
import { useState, useCallback } from "react";
import ModalVideo from "react-modal-video";

const useModalVideo = (videoId = "", options = {}) => {
  const [isOpen, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const Modal = () => (
    <ModalVideo
      channel={"youtube"}
      isOpen={isOpen}
      videoId={"ClAJreqMbbQ"}
      animationSpeed= {350}
      onClose={closeModal}
    />
  );

  return { openModal, Modal };
};

export default useModalVideo;
