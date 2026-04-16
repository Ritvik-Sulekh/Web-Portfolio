function renderTestimonials() {
  const b = typeof BASE_PATH !== 'undefined' ? BASE_PATH : '';
  return `
    <link rel="stylesheet" href="${b}components/testimonials/testimonials.css">

    <section class="testi">

      <div class="testi__header">
        <div class="testi__rule"></div>
        <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
          <div>
            <h1 class="testi__title">Testimonials</h1>
            <p class="testi__sub">What people say about working with me.</p>
          </div>
          <div style="background:#f0fdf4;border:1.5px solid #16a34a;border-radius:12px;padding:0.75rem 1.25rem;text-align:center;flex-shrink:0;margin-bottom:1.5rem;">
            <span id="testiCount" style="font-family:'Inter',sans-serif;font-size:1.4rem;font-weight:700;color:#16a34a;display:block;line-height:1;">—</span>
            <span style="font-family:'Inter',sans-serif;font-size:0.68rem;color:#888;letter-spacing:0.08em;text-transform:uppercase;margin-top:0.3rem;display:block;">Total Testimonials</span>
          </div>
        </div>
      </div>

      <div class="testi__grid">

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">You might not know it but you have helped me a lot during the first year. I wish that we hung out more often. Thank you for being a good friend and floormate. I hope that you get all the success and happiness you want :D</p>
          <div class="testi__footer">
            <div class="testi__avatar">A</div>
            <div class="testi__name">Arihant</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Hey Ritvik, you are a humble, hardworking and a diligent person. I have enjoyed the little moments we shared together on campus, let it be in Sec B or during the 2nd year. You have amazed me with your never give up attitude. All the very best for your future endeavors! Let's stay connected 😄</p>
          <div class="testi__footer">
            <div class="testi__avatar">K</div>
            <div class="testi__name">Keerthana</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">As we bid farewell to our MBA journey, I want to express my deepest gratitude. Your dedication, brilliance, and infectious positivity shaped our experience at every turn. From celebratory milestones to our ranting, your presence made the ride unforgettable. Wishing you boundless success ahead, and may our paths cross again soon.</p>
          <div class="testi__footer">
            <div class="testi__avatar">A</div>
            <div class="testi__name">Arya</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Ritvik, you are a smooth and clean soul. You are decent and smart. You are low-key and tough. You are a friend who can deal with the sweet and sour of the world. You are a fighter for a fair society.</p>
          <div class="testi__footer">
            <div class="testi__avatar">A</div>
            <div class="testi__name">Abhimanyu</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Hey bhai, we did not get to interact much.. only during our study group submissions and vaise bhi, you are a really kind hearted person, and always so humble. It is what I admire about you. Stay happy brother, keep in touch!</p>
          <div class="testi__footer">
            <div class="testi__avatar">K</div>
            <div class="testi__name">Kandarp</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">You are one of the quietest and simplest guy I have ever met. We only sat together in one course but it was enough to make memories. Best of luck for your future!!</p>
          <div class="testi__footer">
            <div class="testi__avatar">AG</div>
            <div class="testi__name">Abhinav Gupta</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Kaafi cheerful bande ho yaar tum. I'm glad I got to know you; you're one of the kindest guys on campus. Hope we stay in touch.</p>
          <div class="testi__footer">
            <div class="testi__avatar">HK</div>
            <div class="testi__name">Harsh Kumar</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Great guy to talk to. Always super nice. Also the tallest dude I know, his view from up there must be crazy.</p>
          <div class="testi__footer">
            <div class="testi__avatar">HB</div>
            <div class="testi__name">Himanshu Bhoria</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Such a sweet person, introverted by nature by Dil❤️ se extroverted!</p>
          <div class="testi__footer">
            <div class="testi__avatar">JS</div>
            <div class="testi__name">Jagjeet Singh</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">You are a really a simple and light hearted person. All the best and hope to see you around.</p>
          <div class="testi__footer">
            <div class="testi__avatar">TB</div>
            <div class="testi__name">Tanmoy Biswas</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">It was tough to understand you but I saw a very motivated and happy person in you. Stay same.</p>
          <div class="testi__footer">
            <div class="testi__avatar">A</div>
            <div class="testi__name">Atul</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">It was nice interacting with you always when we met. I liked your energy in calmness. Keep Shining!</p>
          <div class="testi__footer">
            <div class="testi__avatar">P</div>
            <div class="testi__name">Pawan</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Ritvik all the best for life. It was nice to knowing you. Prepping for managerial accounting exam was fun. Cheers !!</p>
          <div class="testi__footer">
            <div class="testi__avatar">KA</div>
            <div class="testi__name">Kamil Akhter</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Ritvik bhai!, It was nice knowing you buddy, you are a great personality. Wish you all the very best for future ahead.</p>
          <div class="testi__footer">
            <div class="testi__avatar">SJ</div>
            <div class="testi__name">Shubham Jain</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Dearest Ritvik, you are one of the sweetest and calm person I know of. It's been nice knowing of you. Stay in touch.</p>
          <div class="testi__footer">
            <div class="testi__avatar">ST</div>
            <div class="testi__name">Shubham Tayade</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Ritvik, you are the most soft spoken & humble guy I have ever met. Der aye par durust aye.</p>
          <div class="testi__footer">
            <div class="testi__avatar">S</div>
            <div class="testi__name">Shubhrajit</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">It was a good time with you bro. Cheers to a new journey ahead. Hope we cross paths again. 🎊😊❤️🤩</p>
          <div class="testi__footer">
            <div class="testi__avatar">SB</div>
            <div class="testi__name">Sujay Bharti</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Ritvik, boy who gives the best CP. I am glad to have met you! May we keep meeting and celebrating our friendship!</p>
          <div class="testi__footer">
            <div class="testi__avatar">RD</div>
            <div class="testi__name">Raginee Das</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">You're a good guy Ritvik. It must not have been easy with an entire new crowd but I admire your dedication. All the best bro.</p>
          <div class="testi__footer">
            <div class="testi__avatar">T</div>
            <div class="testi__name">Tenzing</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Hey, it was fun to sit next to you in IMS, glad it gave me chance to interact with you. You are very kind and helpful, stay the same! And all the very best for your future 😄</p>
          <div class="testi__footer">
            <div class="testi__avatar">P</div>
            <div class="testi__name">Pungken</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Lucky to have a friend who's so adaptive, and adds a lot of fun to our study group. Your presence makes our time together awesome!</p>
          <div class="testi__footer">
            <div class="testi__avatar">T</div>
            <div class="testi__name">Tarun</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">Hi Ritvik, Thankyou for getting me the Bookmark!! You were truly a great companion! All the best for your future endeavours and stay in touch</p>
          <div class="testi__footer">
            <div class="testi__avatar">A</div>
            <div class="testi__name">Ankushi</div>
          </div>
        </div>

        <div class="testi__card">
          <div class="testi__quote">❝</div>
          <p class="testi__text">The tallest guy on campus. Met you in my early days in campus and you were one of the humble person I have ever met. Hope you achieve all the success in life.</p>
          <div class="testi__footer">
            <div class="testi__avatar">D</div>
            <div class="testi__name">Debjit</div>
          </div>
        </div>

      </div>

    </section>
  `;
}