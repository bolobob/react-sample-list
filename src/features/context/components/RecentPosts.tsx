import Section from "./Section";
import Heading from "./Heading";
import { Post } from "./Post";

export const RecentPosts = () => {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
};
