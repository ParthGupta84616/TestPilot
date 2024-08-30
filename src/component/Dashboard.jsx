import React from "react";
import { ComboboxDemo } from "./ComboBox";
import "../animation.css";
import { Button } from "../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import TableShow from "./Table";

function Dashboard() {
  return (
    <div className="relative">
      <div className="absolute "></div>
      <div className="relative flex justify-center items-center gap-2">
        <ComboboxDemo />
        <main class="">
          <label className="flex flex-col-reverse relative focus group">
            <input
              type="URL"
              name="URL"
              required
              placeholder="Enter URL or paste text"
              className="border-2 h-14 w-[850px] text-xl font-semibold left-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-500 pl-2"
            />
          </label>
        </main>
        <Button size="send" varient="default">
          Send
        </Button>
      </div>
      <div className="relative flex items-center justify-center">
        <Tabs defaultValue="params" className="w-[1150px] mt-4">
          <TabsList className="p-2">
            <TabsTrigger value="params">Params</TabsTrigger>
            <TabsTrigger value="header">Header</TabsTrigger>
            <TabsTrigger value="body">Body</TabsTrigger>
          </TabsList>
          <TabsContent value="params">
            <TableShow />
          </TabsContent>
          <TabsContent value="header">
            <TableShow />
          </TabsContent>
          <TabsContent value="body">Change your body here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
