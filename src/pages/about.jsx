import "../styles/home.css"; 
import Header from "../components/header.jsx"
import photo from "../assets/headshot.png"
import grad from "../assets/grad.JPEG"
import aoii from "../assets/aoii.JPEG"
import hiking from "../assets/hiking.JPEG"
import japan from "../assets/japan.JPEG"

const About = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        
        {/**first section */}
        <li>
            <div className="timeline-middle md:text-end">
                <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                    <div className="flex flex-col xl:flex-col gap-8 items-center xl:items-start justify-end pr-12">
                        <div className="mockup-code w-full">
                            <pre data-prefix="$"><code>Meta</code></pre>
                            <pre data-prefix="$"><code>June 2026 - Present</code></pre>
                            <pre data-prefix="$" className="bg-warning text-warning-content"><code>Generative AI QA Engineer</code></pre>
                            <pre data-prefix=">"><code>Spearheaded testing for AI models.</code></pre>
                            <pre data-prefix=">"><code>Evaluating prompt architecture for games.</code></pre>
                            <pre data-prefix=">"><code>Validated AI accuracy and logic.</code></pre>
                        </div>

                        <div className="timeline-start md:text-end">
                            <div className="mockup-code w-full">
                                <pre data-prefix="$"><code>Vibrosonics</code></pre>
                                <pre data-prefix="$"><code>September 2025 - June 2026</code></pre>
                                <pre data-prefix="$" className="bg-warning text-warning-content"><code>UI/UX Developer</code></pre>
                                <pre data-prefix=">"><code>Built wearable audio-to-haptic device.</code></pre>
                                <pre data-prefix=">"><code>Developed React/Preact WiFi dashboard.</code></pre>
                            </div>
                        </div>

                        <div className="timeline-end mb-10 md:text-end">
                            <div className="mockup-code w-full">
                                <pre data-prefix="$"><code>Trimble</code></pre>
                                <pre data-prefix="$"><code>June 2025 - September 2025</code></pre>
                                <pre data-prefix="$" className="bg-warning text-warning-content"><code>Software Testing Engineer Intern</code></pre>
                                <pre data-prefix=">"><code>Engineered RESTful API endpoints.</code></pre>
                                <pre data-prefix=">"><code>Authored 200+ automated API and UI tests.</code></pre>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 h-155 w-96 shadow-sm">
                        <figure>
                            <img
                            src={aoii}
                            alt="AOII" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                            She's Greek!
                            </h2>
                            <p>Not literally. But, she is a fresh alumn of Alpha Omicron Pi, Alpha Rho Chapter!</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </li>

        {/**second section */}
        <li>
            <hr />

            <div className="timeline-middle mb-10 md:text-end">
                <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                    <div className="card bg-base-100 h-94 w-80 shadow-md shrink-0">
                        <figure>
                            <img src={japan} 
                            alt="Japan" />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-sm">She's Well Traveled!</h2>
                            <p className="text-xs">A true adventurer, she has traveled to Japan and Spain in the last 6 months, and hopes to visit more incredible countries soon!</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 w-full max-w-sm text-left pl-12">
                        <div className="mockup-code w-full">
                            <pre data-prefix="$"><code>Alpha Omicron Pi</code></pre>
                            <pre data-prefix="$"><code>December 2024 - December 2025</code></pre>
                            <pre data-prefix="$" className="bg-warning text-warning-content"><code>Data Analyst</code></pre>
                            <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Engineered Python processing pipelines.</code></pre>
                            <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Converted data into strategic insights.</code></pre>
                        </div>

                        <div className="mockup-code w-full">
                            <pre data-prefix="$"><code>SHRB Lab</code></pre>
                            <pre data-prefix="$"><code>February 2024 - June 2026</code></pre>
                            <pre data-prefix="$" className="bg-warning text-warning-content"><code>Lead Software Developer</code></pre>
                            <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Automated data ingestion for 50+ sensors.</code></pre>
                            <pre data-prefix=">" className="whitespace-normal break-words px-4"><code>Created high-volume visual analytics.</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </li>

        {/**third section */}
        <li>
            <hr />
            <div className="timeline-middle mb-10 md:text-end">
                    <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                        <div className="flex flex-col xl:flex-col gap-2 items-center xl:items-start justify-end pr-12">
                            <div className="timeline-start mb-10 md:text-end">
                                <div className="mockup-code w-full">
                                    <pre data-prefix="$"><code>NASA</code></pre>
                                    <pre data-prefix="$"><code>June 2023 - August 2023</code></pre>
                                    <pre data-prefix="$" className="bg-warning text-warning-content"><code>Software Development Intern</code></pre>
                                    <pre data-prefix=">"><code>Visualized TEMPO satellite data.</code></pre>
                                    <pre data-prefix=">"><code>Integrated atmospheric data to ArcGIS.</code></pre>
                                </div>
                            </div>

                            <div className="mockup-code w-full">
                                <pre data-prefix="$"><code>URSA</code></pre>
                                <pre data-prefix="$"><code>February 2023 - June 2023</code></pre>
                                <pre data-prefix="$" className="bg-warning text-warning-content"><code>Undergraduate Researcher</code></pre>
                                <pre data-prefix=">"><code>Facilitated HCI wearable research.</code></pre>
                                <pre data-prefix=">"><code>Synthesized qualitative datasets.</code></pre>
                            </div>
                        </div>

                        <div className="card bg-base-100 h-99 w-96 shadow-sm">
                            <figure>
                                <img
                                src={hiking}
                                alt="Hiking" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                She's Outdoorsy!
                                </h2>
                                <p>Born and raised in the PNW, she loves a good hike, campsite, or off-roading adventure!</p>
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
        </li>

        {/**fourth section */}
        <li>
            <hr />
                <div className="timeline-middle mb-10 md:text-end">
                    <div className="flex flex-col xl:flex-row gap-6 items-center xl:items-start justify-end">
                        <div className="card bg-base-100 w-80 h-100 shadow-md shrink-0">
                            <figure>
                                <img src={grad} 
                                alt="Grad" />
                            </figure>
                            <div className="card-body p-4">
                                <h2 className="card-title text-sm">She's Well Educated!</h2>
                                <p className="text-xs">A curious mind everywhere she goes, she knows her stuff!</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 w-full max-w-sm text-left pl-22">
                            <div className="timeline-end mb-10 md:text-end">
                                <div className="mockup-code w-full">
                                    <pre data-prefix="$"><code>Oregon State University</code></pre>
                                    <pre data-prefix="$"><code>September 2022 - June 2026</code></pre>
                                    <pre data-prefix="$" className="bg-warning text-warning-content"><code>Bachelor's of Science in Computer Science</code></pre>
                                    <pre data-prefix=">"><code>Emphasis in Data Science</code></pre>
                                    <pre data-prefix=">"><code>3.07 GPA</code></pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <hr />
        </li>
    </ul>
  );
};

export default About;