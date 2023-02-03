import { useState } from "react";
import { Modal, Button } from "flowbite-react";
import PZTextArea from "../form/PZTextArea";
import PZSelect from "../form/PZSelect";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createQuestionSchema } from "../../validations";
import { QuestionPayload } from "../../models/questionModel";
import { useAppDispatch } from "../../app/hooks";
import toast from "react-hot-toast";
import { createQuestion } from "../../features/createQuestionSlice";
import { serverTimestamp } from "firebase/firestore";
import { getQuestions } from "../../features/getQuestionsSlice";

interface Props {
  open: boolean;
  close(): void;
}

const AddQuestion = (props: Props) => {
  const dispatch = useAppDispatch();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createQuestionSchema),
  });

  const onSubmit = (data: any) => {
    setIsSubmitted(true);
    const payload: QuestionPayload = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    toast.promise(dispatch(createQuestion(payload)).unwrap(), {
      loading: "Creating a question...",
      success: (data) => {
        setIsSubmitted(false);
        resetField("question");
        resetField("category");
        dispatch(getQuestions());
        return `Question added successfully`;
      },
      error: (err) => {
        setIsSubmitted(false);
        return err ?? `Error occured while adding question`;
      },
    });
  };

  const categories: { label: string; value: string }[] = [
    { label: "Easy", value: "easy" },
    { label: "Medium", value: "medium" },
    { label: "Difficult", value: "difficult" },
  ];

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
            {...register("question")}
            error={errors.question}
            placeholder="Type the new question..."
          />
          <PZSelect
            label={"Categories"}
            {...register("category")}
            error={errors.category}
            items={categories}
            className="mt-3"
            selected="Select category"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-violet-600 hover:bg-violet-700"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
          <Button
            className="hover:text-violet-600"
            color="gray"
            onClick={props.close}
            disabled={isSubmitted}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddQuestion;
