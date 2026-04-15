import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
});

export const notionRootPageId = process.env.NOTION_ROOT_PAGE_ID ?? "";
