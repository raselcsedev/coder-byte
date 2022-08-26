import React, { useState } from "react";
import Modal from "react-responsive-modal";
import EditProfile from "../Profile/EditProfile";

const Contest = ({ contest }) => {
  const { name, _id, date } = contest;

  const [open, setOpen] = useState(false);

  return (
    <div className="mb-12">
      <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{date}</p>
          <div class="card-actions flex justify-center mt-2">
            <button onClick={() => setOpen(true)} class="btn btn-accent">
              Sign Up
            </button>

            <Modal
              classNames={{
                overlay: "customOverlay",
                modal: "customModal",
              }}
              open={open}
              onClose={() => setOpen(false)}
            >
              <EditProfile></EditProfile>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contest;
