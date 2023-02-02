import { Modal, Button } from "flowbite-react";
import PZTextArea from "../form/PZTextArea";
import PZSelect from "../form/PZSelect";

interface Props {
  open: boolean;
  close(): void;
}

const handleSubmit = () => {};

const categories: { label: string; value: string }[] = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Difficult", value: "difficult" },
];

const AddQuestion = (props: Props) => {
  return (
    <div>
      <Modal
        className="min-h-[100vh]"
        dismissible={false}
        show={props.open}
        onClose={props.close}
      >
        <Modal.Header>Add New Question</Modal.Header>
        <Modal.Body>
          <PZTextArea
            label={"Question"}
            rows={2}
            error={undefined}
            placeholder="Type the new question..."
          />
          <PZSelect
            label={"Categories"}
            error={undefined}
            items={categories}
            className="mt-3"
            selected="Select category"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-violet-800 hover:bg-violet-900"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            className="hover:text-violet-800"
            color="gray"
            onClick={props.close}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddQuestion;
