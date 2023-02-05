import { useState, useEffect } from "react";
import { Modal, Button } from "flowbite-react";
import PZTextArea from "../form/PZTextArea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch } from "../../app/hooks";
import toast from "react-hot-toast";
import { serverTimestamp } from "firebase/firestore";
import PZTextInput from "../form/PZTextInput";
import { useSearchParams } from "react-router-dom";
import { AnswerPayload } from "../../models/answerModel";
import { createAnswerSchema } from "../../validations";
import { createAnswer } from "../../features/createAnswerSlice";
import { getAnswers } from "../../features/getAnswersSlice";

interface Props {
  open: boolean;
  close(): void;
}

const AddAnswer = (props: Props) => {
  const dispatch = useAppDispatch();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    resetField,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createAnswerSchema),
  });

  useEffect(() => {
    setValue("question_id", searchParams.get("q"));
  }, [searchParams, setValue]);

  const onSubmit = (data: any) => {
    // setIsSubmitted(true);
    const payload: AnswerPayload = {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      is_correct: isCorrect,
    };
    console.log("PAY::", payload);
    toast.promise(dispatch(createAnswer(payload)).unwrap(), {
      loading: "Adding new answer...",
      success: (res) => {
        setIsSubmitted(false);
        resetField("answer");
        setIsCorrect(false)
        dispatch(getAnswers(data.question_id));
        return `Answer added successfully`;
      },
      error: (err) => {
        setIsSubmitted(false);
        return err ?? `Error occured while adding answer`;
      },
    });
  };

  const handleCorrectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    setIsCorrect(event.target.checked);
  };

  return (
    <div>
      <Modal
        className="min-h-[100vh]"
        dismissible={false}
        show={props.open}
        onClose={props.close}
      >
        <Modal.Header>Add Answer</Modal.Header>
        <Modal.Body>
          <PZTextArea
            label={"Answer"}
            rows={2}
            {...register("answer")}
            error={errors.answer}
            placeholder="Type the new answer..."
          />
          <PZTextInput
            label={"Image (Optional)"}
            {...register("image")}
            placeholder="Add an image..."
          />
          <div className="mt-5 flex items-center pl-4 border border-slate-400 rounded">
            <input
              onChange={handleCorrectAnswer}
              id="bordered-checkbox-1"
              type="checkbox"
              value=""
              name="bordered-checkbox"
              className="w-4 h-4 text-violet-600 bg-gray-100 border-gray-300 rounded focus:ring-violet-500"
            />
            <label
              htmlFor="bordered-checkbox-1"
              className="w-full py-2.5 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Is correct answer?
            </label>
          </div>
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

export default AddAnswer;
