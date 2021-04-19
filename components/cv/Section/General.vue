<template>
  <div>
    <Heading :size="2">Background</Heading>
    <p>
      My affection to deterministic machines started back in
      university (~2010) when I was striving to create the
      perfect personal website. While this dream has never came
      true, I've found a new hobby, which evolved into profession
      by my graduation.
    </p>

    <p>
      Software development is a bit more than just a work for
      me. I have this personal thing of trying to learn as much
      as possible in all directions at once. Years in the field,
      I still didn't lose that necessity to try to write the
      perfect code when I can and not taking "let's just finish it
      and shove off" path. Finally, I believe that normal work
      contract goes way past by legal formalities and actually is
      more of "care about product, and product will care about
      you", which means that you don't ignore alerts and messages
      even if you're formally allowed to walk past them, but in
      response can always take some time off for your depressive
      episode. However, I must admit that I got bored by dusty
      routine tasks very easily and lose productivity then.
    </p>

    <p>
      Salary is only a secondary factor when choosing a job.
      I don't want to work a) on some dusty projects not making
      any real impact, b) with people that don't care, c) on
      projects that won't allow me to evolve. These factors drive
      my decisions much more than number in bill, which is
      somewhat the same across different companies. I also don't
      work in/with companies doing dirty business.
    </p>

    <Heading :size="2">Natural Languages</Heading>
    <div>Russian: native</div>
    <div>English: IELTS 8.0</div>
    <div>Dutch: below average, in progress</div>

    <Heading :size="2">Education</Heading>

    <Heading :size="3">Sound Engineer</Heading>
    <p>
      Saint-Petersburg University of Humanitarian Studies, 2010-2014
    </p>

    <Heading :size="3">
      Currently applying for Data Science & Artificial Intelligence
    </Heading>
    <p>
      Maastricht University, starting in 2021.
    </p>

    <Heading :size="2">Experience</Heading>
    <v-timeline dense align-top>
      <v-timeline-item>
        <Heading :size="3">Pre-2014</Heading>
        Rare freelance & hobby projects, basic PHP-CSS-JS and
        other shameful stuff.
      </v-timeline-item>
      <v-timeline-item>
        <Heading :size="3">Sep. 2014 - Feb. 2015, small digital studio</Heading>
        PHP Developer.
      </v-timeline-item>
      <v-timeline-item>
        <Heading :size="3">
          Spring 2015 - Spring 2018, <a href="https://amagroup.ru/">AMA Group</a>
        </Heading>
        <p>
          9.999x engineer, multi-language developer & technical
          officer (I think "chief" would be too much here).
        </p>
        <ul>
          <li>
            Architecture & implementation of realty classified
            (Spring, PostgreSQL, RabbitMQ).
          </li>
          <li>
            Supporting prehistoric PHP projects, both as dev and
            ops.
          </li>
          <li>
            Architecture and development of backend for streaming
            service (Spring, Cassandra 3, Wowza).
          </li>
          <li>
            Ellipsoid projection conversion framework and service:
            converting 3d panos from equirectangular to cubemap
            projections, some visual processing up to FXAA.
          </li>
          <li>
            Reactive 3d pano player based on Vue &
            <a href="https://www.marzipano.net/">Marzipano</a>.
          </li>
          <li>
            Internal call tracking project (Java: Spring, Event
            Sourcing, MySQL; JavaScript/TypeScript: VoxImplant.com
            call processing scenarios).
          </li>
          <li>
            PoC of Yelp-alike service using express.js, MongoDB
            and mad skills.
          </li>
          <li>
            PoC of ElasticSearch-backed implementation of current
            projects to replace slow MySQL queries.
          </li>
          <li>
            Simplistic failover infrastructure for mainline
            company products.
          </li>
          <li>
            Manual host managing.
          </li>
          <li>
            Simplistic CI & CD setup.
          </li>
          <li>
            Tons of R&D.
          </li>
          <li>
            Lots of tech-related management & decisions.
          </li>
        </ul>
      </v-timeline-item>

      <v-timeline-item>
        <Heading :size="3">June 2018 - Present, <a href="https://grubhub.com">GrubHub</a></Heading>
        <p>
          Java developer (legally speaking, a contractor) in
          Search Team (several services: search frontend,
          recommendation engine, others I don't have much relation
          to). Some ops tasks like managing self-owned DD
          dashboards, Jenkins pipelines, on-call rotation
          including incident response, investigation, post-mortems
          and so on.
        </p>
        <ul>
          <li>
            Mainly working with ElasticSearch - A/B testing,
            improving relevance, performance tricks and other.
          </li>
          <li>
            Participation in offloading ES sorting to TensorFlow
            and fetch phase to Cassandra for improving search
            query relevance and response time.
          </li>
          <li>
            Development & support of ingestion Spark jobs
            (gathering the data for search engine).
          </li>
          <li>
            On-premises services: ElasticSearch, Cassandra,
            Memcached, Jenkins (managing owned pipelines).
          </li>
          <li>
            Cloud services: AWS - EMR, S3, some one-time tasks
            using other AWS services; LightStep, Splunk, DataDog, Jenkins DSL.
          </li>
          <li>
            Ad-hoc internal infrastructure tasks, performance
            investigations, load tests simulating real production
            load (20k elasticsearch qps).
          </li>
          <li>
            Some complex application architecture solutions.
          </li>
        </ul>
      </v-timeline-item>
    </v-timeline>

    <Heading :size="2">Highlighted skills</Heading>
    <ul>
      <li>
        Understanding assembly language.
      </li>
      <li>
        Understanding of what high-level language code is
        translated to in terms of machine code.
      </li>
      <li>
        Understanding of distributed systems (CAP, FLP and so
        on), though lacking development experience in that field.
      </li>
      <li>
        Knowledge of many JVM quirks and how they work.
      </li>
      <li>
        Experience in whole stack from low-level assembly up
        to client UI.
      </li>
      <li>
        Some understanding of kernel internals.
      </li>
      <li>
        Some understanding of CPU internals.
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Heading from '~/components/element/Heading.vue';

@Component({components: {Heading}})
export default class GeneralCvSection extends Vue {}
</script>