import { ChatGroq } from "@langchain/groq"

const tools = [];

const model = ChatGroq({
    model: "openai/gpt-oss-120b",
    temperature: 0,
}).bindtools(tools)