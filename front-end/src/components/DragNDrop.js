import { useState, useRef } from "react";

function DragNDrop() {
  const data = [
    {
      title: "unsorted",
      items: [
        "Networking",
        "LinkedIn",
        "Resume",
        "Mentorship (from anyone)",
        "Cover Letter",
        "Interviewing",
      ],
    },
    { title: "sorted", items: [] },
  ];

  const [list, setList] = useState(data);
  const [dragging, setDragging] = useState(false);

  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    dragItem.current = params;
    dragNode.current = e.target;
    dragNode.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    const currentItem = dragItem.current;
    if (e.target !== dragNode.current) {
      setList((oldList) => {
        // deep copy
        let newList = JSON.parse(JSON.stringify(oldList));
        newList[params.groupIndex].items.splice(
          params.itemIndex,
          0,
          newList[currentItem.groupIndex].items.splice(
            currentItem.itemIndex,
            1
          )[0]
        );
        dragItem.current = params;
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragNode.current.removeEventListener("dragend", handleDragEnd);
    dragItem.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragItem.current;
    if (
      currentItem.groupIndex === params.groupIndex &&
      currentItem.itemIndex === params.itemIndex
    ) {
      return "current dnd-item";
    }
    return "dnd-item";
  };

  return (
    <div className="drag-n-drop" onDragEnter={(e) => e.preventDefault()}>
      {list.map((group, groupIndex) => (
        <div
          key={group.title}
          className="dnd-group"
          onDragEnter={
            dragging && !group.items.length
              ? (e) => handleDragEnter(e, { groupIndex, itemIndex: 0 })
              : null
          }
          onDragOver={(e) => e.preventDefault()}
        >
          <h2 className="group-title">{group.title}</h2>
          {group.items.map((item, itemIndex) => (
            <div
              draggable
              onDragStart={(e) => handleDragStart(e, { groupIndex, itemIndex })}
              onDragEnter={
                dragging
                  ? (e) => handleDragEnter(e, { groupIndex, itemIndex })
                  : null
              }
              key={item}
              className={
                dragging ? getStyles({ groupIndex, itemIndex }) : "dnd-item"
              }
            >
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default DragNDrop;
