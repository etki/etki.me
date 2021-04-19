<template>
  <v-container flat>
    <v-card class="pa-8">
      <Header :telephones="['+7 (921) 976-67-33']" :emails="['etki@ayte.team']"/>

      <v-divider class="mt-5 primary--text"/>

      <v-tabs v-model="tab">
        <v-tab key="general">General</v-tab>
        <v-tab key="development">Development</v-tab>
        <v-tab key="operations">Operations</v-tab>
        <v-tab key="community">OSS & Community</v-tab>
      </v-tabs>

      <v-divider class="primary--text"/>

      <v-tabs-items v-model="tab">
        <v-tab-item key="general">
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
            Saint-Petersburg University of Humanitarian Studies,
            2010-2014
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
        </v-tab-item>
        <v-tab-item key="development">
          <Heading :size="2">Software development</Heading>
          <p>
            I'm working as a software developer since 2014, and it is
            my main field of work / focus. Most experience I have is
            with Java, but I'm quite fed up with that language, so I'm
            gradually moving to C# / dotnet ecosystem.
          </p>

          <Heading :size="2">Programming languages</Heading>
          <ul>
            <li>Java</li>
            <li>Scala</li>
            <li>Groovy (a bit)</li>
            <li>C#</li>
            <li>C</li>
            <li>JavaScript / TypeScript</li>
            <li>Ruby</li>
            <li>Python</li>
            <li>PHP</li>
          </ul>

          <Heading :size="2">Notable highlights in Java world</Heading>

          <p>
            Not including all the expected stuff like Lombok or Spring.
          </p>

          <ul>
            <li>AsyncHttpClient</li>
            <li>Netty</li>
            <li>Java Async Profiler</li>
            <li>HSDis (HotSpot Disassembly Library, -XX:+PrintAssembly)</li>
            <li>Java Micro Harness</li>
            <li>Google AutoService / manual work with SPI</li>
            <li>JavaPoet</li>
          </ul>

          <Heading :size="2">Notable highlights in JavaScript/TypeScript world</Heading>
          <ul>
            <li>TypeScript</li>
            <li>Vue 2, Nuxt, Vuex, Vuetify</li>
            <li>React, JSX, @material-ui</li>
            <li>Next.js</li>
            <li>VoxImplant.com scenarios managing real-time phone calls</li>
          </ul>

          <Heading :size="2">Databases, storages & related services worked with</Heading>
          <ul>
            <li>ElasticSearch</li>
            <li>RethinkDB</li>
            <li>Redis</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>Memcached</li>
            <li>DynamoDB</li>
            <li>SQLite</li>
            <li>FireBird</li>
            <li>etcd</li>
            <li>Consul</li>
            <li>ClickHouse</li>
            <li>H2 (mostly as in-memory SQL storage for testing)</li>
            <li>Aerospike</li>
            <li>Cassandra (2 & 3)</li>
            <li>MongoDB</li>
            <li>RabbitMQ</li>
          </ul>

          <Heading :size="2">Notable concepts known</Heading>

          <ul>
            <li>CQRS</li>
            <li>Event Sourcing</li>
            <li>Denormalization, projections & so on</li>
            <li>Application-level join is fine</li>
            <li>Inevitability of network split</li>
            <li>Gradual degradation</li>
            <li>Any exposed part of API, even unofficial, can't be withdrawn before major update</li>
          </ul>

        </v-tab-item>
        <v-tab-item key="operations">
          <Heading :size="2">Operations experience</Heading>

          <p>
            Most of my experience with operation-related ecosystem comes
            from personal necessities and curiosity. Because of that I'm
            not exactly an ops-man, but have a lot of experience with
            different tooling, setting up mail/vpn servers and so on and
            don't have much trouble diving into an unexplored topic or
            familiarizing with a new tool. I prefer to work as a
            developer, and this topic is more a focus of my interest in
            setting up personal infrastructure, but I never miss a
            chance to dive in to jump out of developer mindspace for a
            bit.
          </p>

          <Heading :size="2">Classic toolset</Heading>
          <ul>
            <li>Systemd</li>
            <li>Jenkins, Jenkins DSL, brief encounter with Jenkins Job Builder</li>
            <li>Containers & docker in particular</li>
            <li>git</li>
            <li>bash</li>
            <li>ssh</li>
          </ul>

          <Heading :size="2">Host management</Heading>
          <ul>
            <li>Chef</li>
            <li>Brief knowledge of Ansible</li>
            <li>SaltStack, one-time project a long ago</li>
            <li>Test kitchen</li>
          </ul>

          <Heading :size="2">Orchestration, containerization, virtualization</Heading>
          <ul>
            <li>Ops-side K8s knowledge, mostly theoretical, though.</li>
            <li>One-time project using Nomad, setting up & using.</li>
            <li>One-time experience with packer</li>
          </ul>

          <Heading :size="2">Other</Heading>
          <ul>
            <li>Had experience with direct perf usage.</li>
            <li>
              Good knowledge of JVM toolchain (jstat, jmap, GC
              differences, hsdis and so on).
            </li>
            <li>Knowledge of SLA/SLI/SLO difference.</li>
            <li>
              Above average knowledge of Linux and where to start
              tracing problems.
            </li>
            <li>
              Experience with addressing various scaling problems.
            </li>
            <li>
              Theoretical knowledge of most of modern toolchain. Being
              focused on development I rarely went past manual, but
              usually it's enough to unwind someone's problem in local
              user group I'm participating in.
            </li>
          </ul>
        </v-tab-item>
        <v-tab-item key="community">
          <Heading :size="2">OSS & Community</Heading>
          <ul>
            <li>
              Lots of NIH under <a href="https://github.com/ayte-io">Ayte Labs</a>
              brand.
            </li>
            <li>
              <a href="https://medium.com/ayte-io/tagged/make-it-visible">Make It Visible</a>
              series under same brand where I dissect various technical
              stuff down to bone cells. At the moment of writing there
              was only one article due to focusing on relocation, but
              some stuff is being prepared in the background.
            </li>
            <li>
              Occasional medium articles mostly regarding distributed
              systems (<a href="https://medium.com/ayte-io/36d35c36b21e">Distributed locks & Semaphores</a>,
              <a href="https://medium.com/ayte-io/78d1d4660df8">Exactly-once delivery doesn't exist</a>).
            </li>
            <li><a href="https://github.com/interlayer-space">interlayer.space</a> initiative.</li>
            <li>
              SO participant, though not very active, 1.8k rep on
              english site, 35k+ rep on russian site.
            </li>
            <li>
              Leading several russian technical communities, biggest
              one is <a href="https://t.me/elasticsearch_ru">ElasticSearch user group in Telegram</a>
              (2.2k members).
            </li>
            <li>
              Actively participating in many other russian online communities.
            </li>
            <li>
              Giving talks sometimes.
            </li>
          </ul>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Heading from '~/components/element/Heading.vue';
import Header from '~/components/cv/Header.vue';
import {Component} from 'vue-property-decorator';

@Component({components:{Header, Heading}})
export default class CvPage extends Vue {
  public tab: string = null;
}
</script>

<style lang="sass">
.subheader
  line-height: 1.5rem
h2
  margin-top: 2rem
</style>