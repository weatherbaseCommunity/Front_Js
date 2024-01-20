import React, { useState } from "react";
import "../style/TagInput.scss"

export default function TagInput(props) {

  const {tag, tags, changeTag, changeTags} = props;

  const taginputListener = (e) => {
    changeTag(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEnter();
    }
  };

  const handleEnter = () => {
    if (tags.includes(tag)) {
      changeTag('');
      return;
    }
    if (tag === '') return;
    const updatedTags = [...tags, tag];
    changeTags(updatedTags);
    changeTag('');
  };

  const removeTag = (i) => {
    const tempTags = tags.slice();
    tempTags.splice(i, 1);
    changeTags(tempTags);
  }

  return (
    <div className="tagInput_layout">
      {tags.length !== 0 && (
        <div className="tags_wrap">
          {tags.map((tagData, index) => (
            <div 
              className="tags_elements"
              key={index}
              onClick={() => removeTag(index)}
            >
              {tagData}
            </div>
          ))}
        </div>
      )}
      <input
        className="tag_input_area"
        type="text" 
        placeholder="키워드를 입력"
        value={tag}
        onChange={(e) => taginputListener(e)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
    </div>
  )
}