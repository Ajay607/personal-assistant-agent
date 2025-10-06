import { tool } from "@langchain/core/tools"
import { z } from "zod"

export const createEventTool = tool(
    async () => {
        //the meeting has been created
    },
    {
      name: "create-event",
      description: "Call to create the calendar events",
      schema: z.object({})
    }
)

export const getEventsTool = tool(
    async () => {
        //the meeting has been created
        JSON.stringify({
            title: "Meeting with Bob",
            date: "2023-10-10",
            time: "10:00 AM",
            location: "Gmeet"
        })
    },
    {
      name: "get-events",
      description: "Call to create the calendar events",
      schema: z.object({})
    }
)