"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast";
import { insertOneUser } from "../../server/user";

const FormSchema = z.object({
	name: z.string({
    	required_error: "Please enter a name"
	}).min(2, {
    	message: "name must be more than 2 characters long"
	}).max(20, {
    	message: "name must be no longer than 20 characters"
	}),
	question2: z.string({
    	required_error: "Please select an option"
	}),
	question3: z.string(),
	question4: z.string(),
	question5: z.string(),
	question6: z.string(),
	question7: z.string(),
	question8: z.string(),
});

const correctAnswers = {
	question2: "no",
	question3: "option-one",
	question4: "option-one",
	question5: "option-one",
	question6: "option-one",
	question7: "option-four",
	question8: "option-one",
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

  async function onSubmit(data: z.infer<typeof FormSchema>) {
	let score = 0;

	for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
		if (data[question as keyof typeof data] === correctAnswer) {
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
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
				{/* question 1 */}
            	<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 1:</FormLabel>
                        	<FormDescription>What is your name?</FormDescription>
                            	<FormControl>
                                	<Input placeholder="your name here" {...field}/>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>

				{/* question 2 */}
            	<FormField
                	control={form.control}
                	name="question2"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 2:</FormLabel>
                        	<FormDescription>Do you sell drugs?</FormDescription>
                        	<Select onValueChange={field.onChange} defaultValue={field.value}>
                            	<FormControl>
                                	<SelectTrigger>
                                    	<SelectValue placeholder="Please select an answer"/>
                                	</SelectTrigger>
                            	</FormControl>
                            	<SelectContent className="bg-black">
                                	<SelectItem value="yes" className="hover:bg-slate-800">Yes</SelectItem>
                                	<SelectItem value="no" className="hover:bg-slate-800">No</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				{/* remaining questions */}
				{/* question 3 */}
				<FormField
                	control={form.control}
                	name="question3"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 3:</FormLabel>
                        	<FormDescription>Are there good drugs and bad drugs?</FormDescription>
                            	<FormControl>
									<RadioGroup onValueChange={field.onChange} value={field.value}>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-one" id="option-one" />
    										<Label htmlFor="option-one">Yes</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-two" id="option-two" />
    										<Label htmlFor="option-two">No</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question4"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 4:</FormLabel>
                        	<FormDescription>When do drug side effects usually occur?</FormDescription>
                            	<FormControl>
									<RadioGroup onValueChange={field.onChange} value={field.value}>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-one" id="option-one" />
    										<Label htmlFor="option-one">At any time</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-two" id="option-two" />
    										<Label htmlFor="option-two">Immediatelely</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-three" id="option-three" />
    										<Label htmlFor="option-one">After 30 minutes</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-four" id="option-four" />
    										<Label htmlFor="option-one">After one hour</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question5"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 5:</FormLabel>
                        	<FormDescription>Does cigarette and vape contain drugs?</FormDescription>
                            	<FormControl>
									<RadioGroup onValueChange={field.onChange} value={field.value}>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-one" id="option-one" />
    										<Label htmlFor="option-one">Yes</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-two" id="option-two" />
    										<Label htmlFor="option-two">No</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question6"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 6:</FormLabel>
                        	<FormDescription>What is the stimulant drug found in tobacco products?</FormDescription>
                            	<FormControl>
									<RadioGroup onValueChange={field.onChange} value={field.value}>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-one" id="option-one" />
    										<Label htmlFor="option-one">Nicotine</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-two" id="option-two" />
    										<Label htmlFor="option-two">Heroin</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-three" id="option-three" />
    										<Label htmlFor="option-one">Ice</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-four" id="option-four" />
    										<Label htmlFor="option-one">Cannabis</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="question7"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 7:</FormLabel>
                        	<FormDescription>When was the first drug invented?</FormDescription>
                            	<FormControl>
									<RadioGroup onValueChange={field.onChange} value={field.value}>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-one" id="option-one" />
    										<Label htmlFor="option-one">6th Century</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-two" id="option-two" />
    										<Label htmlFor="option-two">10th Century</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-three" id="option-three" />
    										<Label htmlFor="option-one">14th Century</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-four" id="option-four" />
    										<Label htmlFor="option-one">There is no set date.</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
								<FormField
                	control={form.control}
                	name="question8"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 8:</FormLabel>
                        	<FormDescription>What is the internal use of a drug without medical/health reasons?</FormDescription>
                            	<FormControl>
									<RadioGroup onValueChange={field.onChange} value={field.value}>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-one" id="option-one" />
    										<Label htmlFor="option-one">Drug Abuse</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-two" id="option-two" />
    										<Label htmlFor="option-two">Drug Trafficking</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-three" id="option-three" />
    										<Label htmlFor="option-one">Drug User</Label>
  										</div>
  										<div className="flex items-center space-x-2">
    										<RadioGroupItem value="option-four" id="option-four" />
    										<Label htmlFor="option-one">Drug Dealer</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
            	<Button type="submit">Submit</Button>
        	</form>
    	</Form>
	)
}