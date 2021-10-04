import DragNDrop from "./DragNDrop";

export default function StoryFormPage3({ setList, list }) {

  return (
    <div className="form-group">
      <p className="ux-writing">
        The tabs below represent aspects of your story. Move the tabs from left
        to right of the aspects you feel were critical to your hiring. Arrange
        the tabs in order of importance (top to bottom); you don't have to use
        all the tabs.
      </p>
      <DragNDrop list={list} setList={setList} />
    </div>
  );
}
