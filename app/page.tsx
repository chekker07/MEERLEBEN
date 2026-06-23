import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Audience, Emotional, Problem, Process, Services, Trust } from "@/components/Sections";
import { ScrollStory } from "@/components/ScrollStory";

export default function Home() {
  return <main className="overflow-clip"><Header/><Hero/><ScrollStory/><Problem/><Services/><Process/><Emotional/><Trust/><Audience/><Contact/></main>;
}
