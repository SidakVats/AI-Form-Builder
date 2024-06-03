"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { AiChatSession } from "@/configs/AiModal";
import { useUser } from "@clerk/nextjs";
import { db } from "@/configs";
import { JsonForms } from "@/configs/schema";

import moment from "moment/moment";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const PROMPT =
  ",On Basis of description create JSON form with formTitle, formHeading along with fieldName, FieldTitle,FieldType, Placeholder, label , required fields, and checkbox and select field type options will be in array only and in JSON format";

const CreateForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [userInput, setUserInput] = useState();
  const [loading, setLoading] = useState();
  const { user } = useUser();
  const route = useRouter();

  const onCreateForm = async () => {
    setLoading(true);
    const result = await AiChatSession.sendMessage(
      "Description" + userInput + PROMPT
    );
    console.log(result.response.text());
    if (result.response.text()) {
      const resp = await db
        .insert(JsonForms)
        .values({
          jsonform: result.response.text(),
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("DD/MM/yyyy"),
        })
        .returning({ id: JsonForms.id });

      console.log("new form id", resp[0].id);
      if (resp[0].id) {
        route.push("/edit-form/" + resp[0].id);
      }
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div >
      <Button className="w-full" onClick={() => setOpenDialog(true)}>+ Create Form</Button>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Form</DialogTitle>
            <DialogDescription>
              <Textarea
                className="mt-2"
                placeholder="Write description of your form"
                onChange={(event) => setUserInput(event.target.value)}
              />
              <div className="flex gap-2 my-3 justify-end">
                <Button
                  onClick={() => setOpenDialog(false)}
                  variant="destructive"
                >
                  Cancel
                </Button>
                <Button disabled={loading} onClick={() => onCreateForm()} >
                {loading? <Loader2 className="animate-spin"/>: "Create" }
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateForm;
