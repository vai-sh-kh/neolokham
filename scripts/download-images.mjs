#!/usr/bin/env node
/**
 * Downloads all external images used in the app to public/images.
 * Run: node scripts/download-images.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_IMAGES = path.join(__dirname, "..", "public", "images");

const IMAGES = [
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnGIZI5LuELRhxFJcYf7v-6xgkoJUfmHUWNdepXYERERmBb7fATuLInaOmLRD2pUNMwmz2kJPOPPze9eyoHoB7r8TRekaz-ZgDHu34Q2gAl51bxGmJmzaWWWAjOLyIErjG7-U7vf-_Wf1tU3jNQ1RsN0Fgb-Vb5QDbpHqYILO0X5KX_6gQO33vYqPszZQYgPa8R8lneGlF5q4rYuXp1BWoZRzoQ42bMHUrv6eF4z2gPIXZokdgQhh-C3uxpbO1CyZyEcfXP3XyoDs9", file: "hero-tropical.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD65qElhqAsnIHRKqYlAcXw5h-WiaN-W7L7rqcaXPaKP-K2DukJCNBng3zXh9S_NVEJlnVWZQZ0qHL6eYVmVYTckBaZRXixA6fAQCwBr35nbbpD1evSZsh4KzVHv25AGOjsCvBibmm8fYq8Qi8-hinmOWeqIiGjc_z2tDMKXD4HDrIibgH9m7iohMUQpcrsu609GBCcZKslNY-hRUQX0HqX2BItIsdDBLoFdFFmGdCjuOzSDPxz3PFyK4qmOP6m__zfdGzcSWGXVlzG", file: "home-boarding.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2LqOBrsKvz_ATNF5r2L1UAAzLLJ409DYWls0YHJNb8CkY5NeXqTch3AL-iOIV_1n_eYhIxZB-DL9OSJ7w3HNYJVwWZlqA0cauxYBtTc7K_QnPPI7gGdyuV9SJj5HCrY276t1azyDZyxBZEtsIZOS0iXCrKeuxN49l9MoIt9I_oFF5F4hpHTuierTyNM0Z_7Rk_DpSGKUM891i_kfr4e831ciC6yMRtR4ed88IZ5z27zdwVYX5djgbnRJlG9zzYA9BV6wzESADqQ2v", file: "home-swimming.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBQ6WsQQh2Nz8KMvz9GFZR9yP-eHyD0R8Gi5Gv9I7Tgw_ZfINwHTiYZqNNQHW9lotrmZVHdVp4aENiW3QH6Gvl2GB-L_tdsyt11jGVKX8OLXUt2RU74cuwbpLDXN2Q0fc3wCNBrpgwZ_EyNYh9hgqyRvvN2PLnNldtZBhATANF9umnhILxrgz_savX6-t7Mgpkm9fvhzgaks10phFvEJHH1e87zsTLgeka2xl46oJS09CgxWHTXnH4zpm3dv7XBozyknlP7o55T_oy", file: "home-training.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0p-F-3C-b6vPnT9QrEWbzuRTRr2CpnRkqym5xy_q-Qd61_jAEqTnuwG5W7QxQcLmdRlRdMcnNSmsAH44YOhmMwJ5pILH-O1Uuv82L2SwQT6Ypt4fA9WDrH_aqVzzEXej-H_Q2oeBUTyUhp7aPCKObNzXFP1YCykyX7-q89FM9dJA6SfD9uJDr2KgRGh8AgbExxTgyA35nwYGJMAoeVCMhz6PZH_rjkpaQ7fF6x80n-I44WN42IuxuvykuLqTgrssNXHAD2lZ_fWWh", file: "home-grooming.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1MsE3FBr9jyLSazzSCL2gUkubGF4zwich8J0at0f_PaQK3IXxL1vb-1rtgh9v8HXrT5Y-iC0SfhZIfQeMq5hQdA6OI_yMxNjeRw0huVjsXXWcHhbBUUO2pn7OrY3K3SqkVKNvcaW4FadHfWT_zbG8tQngQ0fQZ4zOPLdrH3SX1szBC-0UZiJvn-rPRPx4C6dgeitam3Q8fX1v-U4P89pkymNoZ_WiKhmFOKxI1mROdQm0bL6mbForI4vYOQhygULSQnUVfWo0UmST", file: "contact-map.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAOac0EW55-ZsnC4GQ0oLnD1G3bCTIn38Mwl2VgBRRs6vfKpCePgpiwd5NHQHLqSIHyH_a4csvkfuaqke-dPnVwgRM2yBJwAFJtQ08tOQ43Wwjpl8h5tyADcsLqw6KaKKtuUQYVUltuOXkxFKspWjsV_2yu4ZHC-ECvB1aIkdil0kUl6Nw1gmBeBN5rrim4rHP5wQs8AaAniCXOrLBMTiRYv3IEnwkLwkx8zdGmUA2hQRJttRAGTxTJZ4M5yNnHafmRJXXgr1VrK0r8", file: "contact-angel.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuR4DPcOalV4K4coPzDmRNhJwbxUfTwKdHIKRI-2KYOklI_wRoBdvECfew6L74GWVXz5EuxdC8qGPfxB8WsEhWCbgslDh3dqyhFcCw9yc29du4iOzFuMPTFuDfYvI6X1LuSsGg7c_HPlaE-PR6pc56lcQSMRA1qn1lxlC0VdeYeQh_qY4bEJ9X2_M9D5SlN7-RfdLyJyBF7boQkbxIoE2XPmZcthta6tpTRthcX5mA1tPnjcHXnGmOOMg7qNZMNnAlrZMgI7tTU-Fe", file: "contact-devil.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAait6VdUA0tFH32OWpqFQ4nB5bc-42wURmz4hZzzDkFm9UhxEmI0AljPA2Q479TB_mB-a-9A_pWRPbHnedvgJwOsdBoyfCPnZO7K2v6j38iem9rm1l9l4pb9dv4TZgIOyNNZxNF2p-fhlwZ2izqRAjFVlC-ouWNt5VUzXLYIQRlUMg4D3Z7Z1pXICpSyMd7zlCh0CfQS2W_uAeqR5DpC_njRHluMCyEjvfz3cWQZyBkFt5Xq_3nVj9721NfoYWP8j29bRNhYVr1day", file: "contact-drama.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN634X-3Xl1PLgj9zvimaulEZONQIoB8kVDxTgv73VY-bpywVqcUZN0U2wUtCAuwUqiAn72ppHeMbLlWL-fAPJiH7HKcYBGH3-lQ5Tibhw8_lVo-_FeEAHJ4O9omzBErZrAcd59eOBNnNmbZmUL19umvHNGI3JhwknTkKo2CmLz05FiUQ7Lt7oTQlPEEfdPwUy12Sa4b16aJXGv4Rzot8fqcJMEY60Pi4dEwxGTi38cZ_V4Q0Qf6ZTYPZeN0brXhS9HouiF018hhrC", file: "brochure-ecological.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq36OcnoqAFnUAcrQUhoaroSYcwhfL9Veb4CWcE-SU11965L1-MT_fpUdQmUyLv1i5m4Q5BRmg-MKA9h4tNTYHu4IUs7PKB6fTmxwcR0Wg6vR3gMV5TGgpF9rKEJ6TEC8i-A_M2hkAO-3xjdJef-wxSt7W60Jc-wU79y0Hl_tHxu1SLICdGbOrFslhtiMGjTMhvtfjIxOP5GmfjTdaEAsTaIdEBJb66KZlRrF_hichqVhSOajqIwpS1hMb87764D2aagCKF-1HyH6R", file: "brochure-dog-park.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQpII7z2iuwSyeCbqgKWjRqIzCyDH5-hSAC08zmaAfb0zIGyH8CskPp021LzJVU7-FEwmOgyIpKAWcljJZv3J-GMo72e59xXOoGRz8HQtItJGzcABRNBnOZd6voiwWXSQoV5DHIyJ_zfn2vhbbeOy8qZxOQGRH7TXrPGTfBreu7QlgawNFQfXiJCA6R-caBIE-PLOUyirLwd6XVEtKIjkpLzHd-isuPo95CmV88k1rcLUnIxeInI8idXGcYTciyCegabt825-x2PYy", file: "brochure-retreats.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5PZTS4_3V9NAmz7FBxYCG8X5a4CS15riYO-kwZiBVov5Tvbe5NExjlAVxAr0wJLEiKZUWUdrtoh92gKyQIywIoMkpLcIFHMT5LoKh0a_BmMMXl3Yb1K6J0rhwE63vF2Vtt9Vd_jXcQykn_iC5NLzUQ-93eZHF4RFRzNGpcTAxAoVq117486gRPNTtzhKfi1qZa9qpP6a4w6RYs0he806EbvvUMT4RG-5ikLRHyCRkAxp4fhnP0uasBACf-x0BesXiLBConCAPaJl2", file: "about-puppy-eyes.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgaPKpjIskTWmqvmXzMrhG8426s6NCPuVG8c6VoErxpp5XLlRvxtcx8LS-JVuQQMtVQGWJiPs-unUgqZv7DeDf4gcpsiwafs9qMunU5tTbp7rUnvZZP5JS3DKgqhOnRnL2nUOeDmB6V13wvUYGrs_QUCcjyTVQ1vv-Xn1c5CnraQ4MokfWJ4weJjh5uga3gVKtUgcAtn44Z2Mka9SO8LfTatGGi-YNXc2mUXpSLdB6lML4P0qqscbuvQ0-g6G_tPIjh_aJg-Z66Tv-", file: "about-farm-1.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhx6bxAejSdzZfn3KHMQ4CIGreUH7wAdSOphCHcNJ_GVKRfeFIqw35UTH4AVpaprXtS4jZm_sDKoDWgjF8TgvTlqKX12PKFlvhJG0VxgjsP5Q1o2R1bzjF8v9fh6Di8i-1WoYEEJIP1UywCAL7TnHRemo_rNXaAZyYaEcnYaLznncgBy-9IZ6YlCva-2sLyQkDlRnxbAiF4hWVVog2oPNIeFY4hSbnb_0DyFHWVHa95MjvysgKGoexLvyrhN_AHDUlpKCHkwaTFR1z", file: "about-farm-2.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLF1h_dYbw0seqFyRqG2FMdccalDz0Pug7CTaEKKjsyMAYkuBMsCgqKtkYq2dsYlnmVGnkk5g0_1_yZXT7ILdLVcut0zZWHqf1YOK8vWkeb_-zy619i2yDCtAVjYiu0bpuSes_SoNBTALx9JADTJzs22Efn6WU4mURfmCFqn1CftYse_mYbkvexqijJpfhDvZzLPWYSph979DkeeAfROeXQkL9We68uKPqCaFf9pMzZfPyy1mwqyq1hpNaKoV4xA-6s7eXHP6zzAAW", file: "textured-paper.jpg" },
  { url: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2hf0zT-BEaRVDJlZ84WM-z9JB4Gs2iKMI0tERo_SMCtOsR9iNY7nFCyNiYZjne8KZMo3yNDA0s5scuns4xOU0k8KmAzl3jeG5pE66yz7L5Q2v-udLz6yJILq5QNkeBLw9b98lvN13RDm9oJsHO7NCXPG8Cjgmn8RzKdJlALr-jlH6BT8UCaCqcKuiZcFUV6l0gk8C8WVNCaLxcFjBA60vqi6WXBKHCzN2P1nT6tWkXIfF_Kry3fBcZjyuy5iexjhNyI8uGNgELFG9", file: "forest-overlay.jpg" },
];

const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36";

if (!fs.existsSync(PUBLIC_IMAGES)) {
  fs.mkdirSync(PUBLIC_IMAGES, { recursive: true });
}

let done = 0;
for (const { url, file } of IMAGES) {
  const filePath = path.join(PUBLIC_IMAGES, file);
  if (fs.existsSync(filePath)) {
    console.log(`Skip (exists): ${file}`);
    done++;
    continue;
  }
  try {
    const res = await fetch(url, { headers: { "User-Agent": USER_AGENT } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    fs.writeFileSync(filePath, Buffer.from(buf));
    console.log(`Saved: ${file}`);
    done++;
  } catch (err) {
    console.error(`Failed ${file}:`, err.message);
  }
}
console.log(`Done: ${done}/${IMAGES.length} images.`);
