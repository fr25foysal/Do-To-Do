import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import { addToLs } from "../../utils/localStorage";

const AddTask = () => {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit=(data)=>{
   const task = {...data,"id":uuidv4()}
   console.log(task);
   addToLs(task)
  }

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 justify-center gap-5">
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-lg focus:border-0 outline-0 border-secondary"
          {...register("Title", { required: true, min: 2, maxLength: 45 })}
        />
        <input
          type="text"
          className="input input-bordered w-full max-w-lg focus:border-0 outline-0 border-secondary"
          placeholder="Description"
          {...register("Description", { required: true })}
        />
        <input
          type="date"
          className="input input-bordered w-full max-w-lg focus:border-0 outline-0 border-secondary"
          placeholder="Deadline"
          {...register("Deadline", { required: true })}
        />
        <select
          className="select select-bordered w-full max-w-lg focus:border-0 outline-0 border-secondary"
          {...register("Priority")}
          defaultValue={"Low"}
        >
          <option value="Low">Low</option>
          <option value=" Moderate "> Moderate </option>
          <option value=" High"> High</option>
        </select>
      </div>

      <input
        type="submit"
        className="btn btn-secondary mx-auto w-32 mt-5 text-white"
      />
    </form>
        </div>
    );
};

export default AddTask;