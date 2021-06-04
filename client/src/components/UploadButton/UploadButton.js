import React from "react";
import "./UploadButton.css";

const UploadButton = () => {
    return (
        <div className="custom-file">
            <input
                type="file"
                className="custom-file__input"
                id="field-upload"
                name="image"
                required
                multiple
            />
            <label className="custom-file__label" htmlFor="field-upload">
                Choose Product Image
            </label>
        </div>
    );
};

export default UploadButton;
