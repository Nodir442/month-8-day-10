"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const CustomForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          {...register("name", { required: true })}
          className="bg-gray-200"
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
          className="bg-gray-200"
        />
        {errors.email && <span className="text-red-500">Email is required</span>}
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Your Password"
          {...register("password", { required: true })}
          className="bg-gray-200"
        />
        {errors.password && <span className="text-red-500">Password is required</span>}
      </div>

      <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
        Submit
      </Button>
    </form>
  );
};
