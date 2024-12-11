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
	question1: z.string({
    	required_error: "Please select an option"
	})
})

export default function Quiz() {
	const { toast } = useToast();

	const form = useForm<z.infer<typeof FormSchema>>({
    	resolver: zodResolver(FormSchema)
	})

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.question1 === "yes") {
        toast({
            title: `Congratulations ${data.name}`,
            description: "You are a drug dealer",
        })
    } else {
        toast({
            title: `Thank you ${data.name}`,
            description: "Unfortunately you are not a drug dealer",
        })
    }

	const isDrugDealer = true ? data.question1 === "yes" : false;
	await insertOneUser(data.name, isDrugDealer);
  }


	return (
    	<Form {...form}>
        	<form onSubmit={form.handleSubmit(onSubmit)} className="w2/3 space-y-6">
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
            	<FormField
                	control={form.control}
                	name="question1"
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
                            	<SelectContent>
                                	<SelectItem value="yes">Yes</SelectItem>
                                	<SelectItem value="no">No</SelectItem>
                            	</SelectContent>
                        	</Select>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
				<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 3:</FormLabel>
                        	<FormDescription>Is there good drugs and bad drugs?</FormDescription>
                            	<FormControl>
									<RadioGroup defaultValue="option-one">
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
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 4:</FormLabel>
                        	<FormDescription>When do drug side effects usually occur?</FormDescription>
                            	<FormControl>
									<RadioGroup defaultValue="option-one">
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
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 5:</FormLabel>
                        	<FormDescription>Does cigarette and vape contain drugs?</FormDescription>
                            	<FormControl>
									<RadioGroup defaultValue="option-one">
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
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 6:</FormLabel>
                        	<FormDescription>What is the stimulant drug found in tobacco products?</FormDescription>
                            	<FormControl>
									<RadioGroup defaultValue="option-one">
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
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 7:</FormLabel>
                        	<FormDescription>When was the first drug invented?</FormDescription>
                            	<FormControl>
									<RadioGroup defaultValue="option-one">
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
    										<Label htmlFor="option-one">There is no set date</Label>
  										</div>
									</RadioGroup>
                            	</FormControl>
                        	<FormMessage/>
                    	</FormItem>
                	)}
            	/>
								<FormField
                	control={form.control}
                	name="name"
                	render={({ field }) => (
                    	<FormItem>
                        	<FormLabel>Question 8:</FormLabel>
                        	<FormDescription>What is the internal use of a drug without medical/health reasons?</FormDescription>
                            	<FormControl>
									<RadioGroup defaultValue="option-one">
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