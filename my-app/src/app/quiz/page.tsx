"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "next-themes";

const FormSchema = z.object({
  name: z.string({
    required_error: "Please enter a name",
  }).min(2, {
    message: "Name must be more than 2 characters long",
  }).max(20, {
    message: "Name must be no longer than 20 characters",
  }),
  question2: z.string({
    required_error: "Please select an option",
  }),
  question3: z.string(),
  question4: z.string(),
  question5: z.string(),
  question6: z.string(),
  question7: z.string(),
  question8: z.string(),
});

const correctAnswers = {
  question2: "yes",
  question3: "option-one",
  question4: "option-one",
  question5: "option-one",
  question6: "option-one",
  question7: "option-one",
  question8: "option-one",
};


const SelectOptionBackground = ({ theme }: { theme: string | undefined }) => {
	switch (theme) {
	  case "dark":
		return "bg-gray-800 text-white hover:bg-gray-700";
	  case "christmas":
		return "bg-yellow-500 text-white hover:bg-red-400";
	  default:
		return "bg-gray-100 text-black hover:bg-gray-200";
	}
  };

export default function Quiz() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
    },
  });

  const StarRadioButton = ({ id, value, label, field }: any) => (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        id={id}
        value={value}
        {...field}
        className="sr-only"
        onChange={() => field.onChange(value)} // Explicitly set value on change
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className={`w-5 h-5 ${
          field.value === value ? "text-yellow-500" : "text-gray-400"
        } transition`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
        />
      </svg>
      <span className="text-sm">{label}</span>
    </label>
  );

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    let score = 0;

    for (const question of Object.keys(correctAnswers) as Array<keyof typeof correctAnswers>) {
      if (data[question] === correctAnswers[question]) {
        score += 1;
      }
    }

    toast({
      title: `Congratulations ${data.name}`,
      description: `Your score is ${score}/${Object.keys(correctAnswers).length}!`,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Question 1 */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 1:</FormLabel>
              <FormDescription>What is your name?</FormDescription>
              <FormControl>
                <Input placeholder="Your name here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 2 */}
        <FormField
			control={form.control}
			name="question2"
			render={({ field }) => {
				const { theme } = useTheme(); // Get the current theme

				return (
				<FormItem>
					<FormLabel>Question 2:</FormLabel>
					<FormDescription>Can ex drug users have second chance in life?</FormDescription>
					<Select onValueChange={field.onChange} defaultValue={field.value}>
					<FormControl>
						<SelectTrigger>
						<SelectValue placeholder="Please select an answer" />
						</SelectTrigger>
					</FormControl>
					<SelectContent>
						<SelectItem
						value="yes"
						className={SelectOptionBackground({ theme })} // Apply dynamic styles
						>
						Yes
						</SelectItem>
						<SelectItem
						value="no"
						className={SelectOptionBackground({ theme })} // Apply dynamic styles
						>
						No
						</SelectItem>
					</SelectContent>
					</Select>
					<FormMessage />
				</FormItem>
				);
			}}
			/>

        {/* Question 3 */}
        <FormField
          control={form.control}
          name="question3"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 3:</FormLabel>
              <FormDescription>What is the minimum amount of time needed for effective treatment for drug addiciton?</FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <StarRadioButton id="question3-option-one" value="option-one" label="at least 3 months" field={field} />
                  <StarRadioButton id="question3-option-two" value="option-two" label="at least 1 month" field={field} />
				  <StarRadioButton id="question3-option-three" value="option-three" label="at least 8 months" field={field} />
				  <StarRadioButton id="question3-option-four" value="option-four" label="at least 1 year" field={field} />

                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 4 */}
        <FormField
          control={form.control}
          name="question4"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 4:</FormLabel>
              <FormDescription>When do drug side effects usually occur?</FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <StarRadioButton id="question4-option-one" value="option-one" label="At any time" field={field} />
                  <StarRadioButton id="question4-option-two" value="option-two" label="Immediately" field={field} />
                  <StarRadioButton id="question4-option-three" value="option-three" label="After 30 minutes" field={field} />
                  <StarRadioButton id="question4-option-four" value="option-four" label="After one hour" field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 5 */}
        <FormField
          control={form.control}
          name="question5"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 5:</FormLabel>
              <FormDescription>Does cigarette and vape contain drugs?</FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <StarRadioButton id="question5-option-one" value="option-one" label="Yes" field={field} />
                  <StarRadioButton id="question5-option-two" value="option-two" label="No" field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 6 */}
        <FormField
          control={form.control}
          name="question6"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 6:</FormLabel>
              <FormDescription>What is the stimulant drug found in tobacco products?</FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <StarRadioButton id="question6-option-one" value="option-one" label="Nicotine" field={field} />
                  <StarRadioButton id="question6-option-two" value="option-two" label="Heroin" field={field} />
                  <StarRadioButton id="question6-option-three" value="option-three" label="Ice" field={field} />
                  <StarRadioButton id="question6-option-four" value="option-four" label="Cannabis" field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 7 */}
        <FormField
          control={form.control}
          name="question7"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 7:</FormLabel>
              <FormDescription>Has drug abuse in Singapore grown since 2022?</FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <StarRadioButton id="question7-option-one" value="option-one" label="Yes" field={field} />
                  <StarRadioButton id="question7-option-two" value="option-two" label="No" field={field} />
                  <StarRadioButton id="question7-option-three" value="option-three" label="it increased then decreased" field={field} />
                  <StarRadioButton id="question7-option-four" value="option-four" label="it decreased then increased" field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Question 8 */}
        <FormField
          control={form.control}
          name="question8"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question 8:</FormLabel>
              <FormDescription>What is the internal use of a drug called without medical/health reasons?</FormDescription>
              <FormControl>
                <div className="space-y-2">
                  <StarRadioButton id="question8-option-one" value="option-one" label="Drug Abuse" field={field} />
                  <StarRadioButton id="question8-option-two" value="option-two" label="Drug Trafficking" field={field} />
                  <StarRadioButton id="question8-option-three" value="option-three" label="Drug User" field={field} />
                  <StarRadioButton id="question8-option-four" value="option-four" label="Drug Dealer" field={field} />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
