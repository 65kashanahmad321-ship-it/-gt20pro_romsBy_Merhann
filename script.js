const romData = {
  stock: {
    title: "Stock ROMs",
    eyebrow: "Official Firmware",
    accent: "#36e39d",
    icon: "ST",
    summary: "Original XOS firmware packages for GT 20 Pro.",
    description:
      "Use stock builds when you want factory firmware, repair files, or a clean base before moving to port ROMs.",
    roms: [
      {
        id: "xos-15-1-2-165",
        title: "XOS 15.1.2.165",
        status: "Stock build",
        source: "GT 20 Pro",
        base: "Official firmware",
        architecture: "64-Bit",
        intro:
          "Stock XOS 15.1.2.165 package for GT 20 Pro. Open either the flashable package or the tool package when the download links are added.",
        options: [
          {
            title: "Flashable",
            description: "Recovery flashable package for TWRP or OFOX.",
            link: "https://drive.google.com/file/d/1ywfInXh2Oxdo593YCIFLCLJvzPUoYFaA/view",
            label: "Download Flashable",
          },
          {
            title: "Toolable",
            description: "Firmware package for flashing with a desktop flashing tool.",
            link: "#",
            label: "Toolable link pending",
          },
        ],
      },
      {
        id: "xos-15-1-2-145",
        title: "XOS 15.1.2.145",
        status: "Stock build",
        source: "GT 20 Pro",
        base: "Official firmware",
        architecture: "64-Bit",
        intro:
          "Stock XOS 15.1.2.145 package for GT 20 Pro. Open either the flashable package or the tool package when the download links are added.",
        options: [
          {
            title: "Flashable",
            description: "Recovery flashable package for TWRP or OFOX.",
            link: "https://drive.google.com/file/d/1npZEymyco7y1b_qXNPC6enCf6OBlRFEG/view?usp=sharing",
            label: "Download Flashable",
          },
          {
            title: "Toolable",
            description: "Firmware package for flashing with a desktop flashing tool.",
            link: "#",
            label: "Toolable link pending",
          },
        ],
      },
      {
        id: "xosflashable-15-1-2-129",
        title: "xosflashable_15.1.2.129",
        status: "Stock build",
        source: "GT 20 Pro",
        base: "Official firmware",
        architecture: "64-Bit",
        intro:
          "Stock xosflashable_15.1.2.129 package for GT 20 Pro. Open either the flashable package or the tool package when the download links are added.",
        options: [
          {
            title: "Flashable",
            description: "Recovery flashable package for TWRP or OFOX.",
            link: "https://drive.google.com/file/d/12bj6CQlYwqTmOngaxxWM3HYegaPzx5c8/view?usp=sharing",
            label: "Download Flashable",
          },
          {
            title: "Toolable",
            description: "Firmware package for flashing with a desktop flashing tool.",
            link: "#",
            label: "Toolable link pending",
          },
        ],
      },
    ],
  },
  port: {
    title: "Port ROMs",
    eyebrow: "Ported XOS Builds",
    accent: "#43d4ff",
    icon: "PR",
    summary: "XOS port ROMs prepared for GT 20 Pro.",
    description:
      "Port ROMs created by Mehrann, with flashing notes, required files, changelogs, and known issues.",
    roms: [
      {
        id: "xos-16-1",
        title: "XOS 16.1",
        subtitle: "Ported from Note Edge",
        status: "Stable Release v2",
        source: "Note Edge",
        base: "Based on any A15 vendor",
        architecture: "64-Bit Only",
        intro:
          "XOS 16.1 for GT 20 Pro, ported from Note Edge by Mehrnn.",
        download:
          "https://drive.google.com/file/d/1T91Z207IHD_tfzvU6-TFUviwjxIchSxW/view",
        downloadLabel: "Download XOS16.1-v2-X6871-Mehrnn.zip",
        sections: [
          {
            title: "Base & specs",
            items: ["Base: Any A15 Vendor", "Android: Android 16"],
          },
          {
            title: "What's new",
            items: [
              "Enforcing",
              "Mem Fusion Fixed",
              "Media Fixed",
              "Visual Lag Fixed",
              "Charging Fixed",
            ],
          },
          {
            title: "Requirements",
            items: ["Vbmeta Disabler", "Working brain"],
            tone: "note",
          },
          {
            title: "Flashing steps",
            ordered: true,
            items: [
              "Reboot to Recovery, TWRP or OrangeFox.",
              "Flash Vbmeta Disabler.",
              "Flash ROM.zip.",
              "Format Data.",
              "Reboot System.",
            ],
          },
          {
            title: "Credits",
            items: [
              "Mehrnn",
            ],
          },
        ],
      },
      {
        id: "xos-16-2-note-50s",
        title: "XOS 16.2 Port",
        subtitle: "Ported from Infinix Note 50s",
        status: "Stable Release v2",
        source: "Infinix Note 50s",
        base: "Based on any A15 vendor",
        architecture: "64-Bit Only",
        intro:
          "XOS 16.2.0 for GT 20 Pro, ported by Mehrnn. Do not compare with stock. Can dirty flash from the old Note 50s port.",
        download:
          "https://drive.google.com/file/d/1JdifWk1U-Tqw83Pb0PbUPvFqJSJLoO5e/view?usp=sharing",
        downloadLabel: "Download ROM",
        extraLinks: [
          {
            label: "Bypass Charging Fix",
            url: "https://t.me/xos16x6871portlinks/23",
          },
          {
            label: "Vbmeta Disabler",
            url: "https://t.me/infinixgt20proid/14628",
          },
        ],
        sections: [
          {
            title: "Changelogs",
            items: ["Fixed device uncertified"],
          },
          {
            title: "Known bugs",
            items: ["Bypass Charging. Use the linked fix."],
            tone: "warning",
          },
          {
            title: "Required things",
            items: ["Vbmeta Disabler", "Working brain"],
            tone: "note",
          },
          {
            title: "Flashing process",
            ordered: true,
            items: [
              "Reboot to Recovery, TWRP or OFOX.",
              "Flash Vbmeta Disabler.",
              "Flash ROM.zip.",
              "Format Data.",
              "Reboot System.",
            ],
          },
          {
            title: "Credits",
            items: [
              "Allah (S.W.T)",
              "@satyam_rai1",
              "@ramabondanp",
              "Testers and contributions",
            ],
          },
        ],
      },
      {
        id: "xos-16-2-note-60-ultra",
        title: "XOS 16.2 Port",
        subtitle: "Ported from Infinix Note 60 Ultra",
        status: "Stable Release v2",
        source: "Infinix Note 60 Ultra",
        base: "Based on FW 15.1.2.145-165",
        architecture: "64-Bit Only",
        intro:
          "XOS 16.2.0 for GT 20 Pro, ported by Mehrnn. Do not compare with stock.",
        download:
          "https://drive.google.com/file/d/1tSSry1rRWioJZi-c9Dg6k1zYBie5qql_/view",
        downloadLabel: "Download ROM",
        extraLinks: [
          {
            label: "Vbmeta Disabler",
            url: "https://t.me/infinixgt20proid/14628",
          },
        ],
        sections: [
          {
            title: "Changelogs",
            items: ["Minor bug fixes"],
          },
          {
            title: "Required things",
            items: ["Vbmeta Disabler", "Working brain"],
            tone: "note",
          },
          {
            title: "Flashing process",
            ordered: true,
            items: [
              "Reboot to Recovery, TWRP or OFOX.",
              "Flash Vbmeta Disabler.",
              "Flash ROM.zip.",
              "Format Data.",
              "Reboot System.",
            ],
          },
          {
            title: "Credits",
            items: [
              "Allah (S.W.T)",
              "@satyam_rai1",
              "@ramabondanp",
              "Testers and contributions",
            ],
          },
        ],
      },
    ],
  },
  custom: {
    title: "Custom ROMs",
    eyebrow: "Community Builds",
    accent: "#ffcd4d",
    icon: "CU",
    summary: "A reserved section for AOSP, GSI, or community ROM files.",
    description:
      "Custom ROM cards can be added here when a build is ready for GT 20 Pro.",
    roms: [
      {
        id: "pixelos-android-16-hotfix",
        title: "PixelOS",
        subtitle: "HOTFIX / UNOFFICIAL / Android 16",
        status: "Released 09/03/2026",
        source: "PixelOS",
        base: "Based on XOS 15 Firmware",
        architecture: "Android 16",
        intro:
          "PixelOS hotfix build for Infinix GT 20 Pro by fjrXTR.",
        download:
          "https://sourceforge.net/projects/gabutbuild/files/X6871/pos-16/20260308/",
        downloadLabel: "Download PixelOS",
        extraLinks: [
          {
            label: "Screenshots",
            url: "https://t.me/xtrbasementt/6229",
          },
          {
            label: "Donate",
            url: "https://sociabuzz.com/v1llhaze",
          },
        ],
        sections: [
          {
            title: "Changelogs",
            items: ["Fixed Bad Performance"],
          },
          {
            title: "Known issues",
            items: ["U tell me (gib logs or gtfo)"],
            tone: "warning",
          },
          {
            title: "Notes",
            items: [
              "User Build",
              "Based on XOS 15 Firmware",
              "Do NOT replace the kernel (248 below) or else hotspot breaks",
              "Recommended to use PixelOS Recovery",
              "Signed & GApps Build",
              "Please make sure that you made IMEI backup, you are on right recovery and right firmware version.",
            ],
            tone: "note",
          },
          {
            title: "Credits",
            items: [
              "Thx to xyzuniverse, shirayuki39, irawansalt, xiaomi-mt6895-devs, lisaa-devs, Nothing-2A Devs for references commit & help me",
              "Thx to @rianixia, irawansalt for help me to fix FOD",
              "Thx to @MBuTT3178 @Laynsb for test & support me",
            ],
          },
        ],
      },
      {
        id: "axion-aosp-2-4-solace",
        title: "AxionAOSP 2.4 Solace",
        subtitle: "UNOFFICIAL / Android 16",
        status: "Released 04/03/2026",
        source: "AxionAOSP",
        base: "Based on XOS 15 Firmware",
        architecture: "Android 16",
        intro:
          "AxionAOSP 2.4 Solace build for Infinix GT 20 Pro by fjrXTR.",
        download:
          "https://sourceforge.net/projects/gabutbuild/files/X6871/axion-16/",
        downloadLabel: "Download AxionAOSP",
        extraLinks: [
          {
            label: "Screenshots",
            url: "https://t.me/xtrbasementt/5322",
          },
          {
            label: "Donate",
            url: "https://sociabuzz.com/v1llhaze",
          },
        ],
        sections: [
          {
            title: "Changelogs",
            items: [
              "Initial Build",
              "Added Dolby Atmos",
              "Fixed BT Audio issue",
              "Fixed Hotspot Issue",
              "Fixed USB issue again",
              "Fixed UI Shuttering",
              "Removed ViPER4Android",
              "Many more under the hood changes and optimization",
            ],
          },
          {
            title: "Known issues",
            items: ["U tell me (gib logs or gtfo)"],
            tone: "warning",
          },
          {
            title: "Notes",
            items: [
              "Based on XOS 15 Firmware",
              "Do NOT replace the kernel (248 below) or else hotspot breaks",
              "Recommended to use PixelOS Recovery",
              "Signed & GApps Build",
              "Please make sure that you made IMEI backup, you are on right recovery and right firmware version.",
            ],
            tone: "note",
          },
          {
            title: "Credits",
            items: [
              "Thx to xyzuniverse, shirayuki39, irawansalt, xiaomi-mt6895-devs, lisaa-devs, Nothing-2A Devs for references commit & help me",
              "Thx to @rianixia, irawansalt for help me to fix FOD",
              "Thx to @MBuTT3178 @yashtiwari456 Xiswap for test & support me",
            ],
          },
        ],
      },
    ],
  },
};

const app = document.querySelector("#app");
const backButton = document.querySelector("#backButton");
const viewEyebrow = document.querySelector("#viewEyebrow");
const viewTitle = document.querySelector("#viewTitle");
const viewSubtitle = document.querySelector("#viewSubtitle");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function actionLink(url, label, extraClass = "") {
  const safeLabel = escapeHtml(label);
  if (!url || url === "#") {
    return `<span class="button disabled ${extraClass}" aria-disabled="true">${safeLabel}</span>`;
  }

  return `<a class="button ${extraClass}" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${safeLabel}</a>`;
}

function setHeader({ eyebrow, title, subtitle, showBack = false, backTarget = "#home" }) {
  viewEyebrow.textContent = eyebrow;
  viewTitle.textContent = title;
  viewSubtitle.textContent = subtitle;
  backButton.hidden = !showBack;
  backButton.dataset.target = backTarget;
}

function setActiveNav(categoryId) {
  document.querySelectorAll(".topnav a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#category/${categoryId}`);
  });
}

function renderHome() {
  setHeader({
    eyebrow: "ROM Library",
    title: "Choose a ROM type",
    subtitle: "Start with stock firmware, ported XOS builds, or custom ROM files.",
  });
  setActiveNav("");

  app.innerHTML = `
    <div class="category-grid">
      ${Object.entries(romData)
        .map(([id, category]) => {
          const count = category.roms.length;
          const romText = count === 1 ? "1 ROM" : `${count} ROMs`;
          return `
            <article class="card" style="--accent: ${category.accent}">
              <div class="card-top">
                <span class="card-icon" aria-hidden="true">${category.icon}</span>
                <span class="count-pill">${romText}</span>
              </div>
              <h3>${escapeHtml(category.title)}</h3>
              <p>${escapeHtml(category.summary)}</p>
              <a class="button" href="#category/${id}">Open</a>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderCategory(categoryId) {
  const category = romData[categoryId];
  if (!category) {
    renderHome();
    return;
  }

  setHeader({
    eyebrow: category.eyebrow,
    title: category.title,
    subtitle: category.description,
    showBack: true,
    backTarget: "#home",
  });
  setActiveNav(categoryId);

  if (!category.roms.length) {
    app.innerHTML = `
      <div class="empty-state">
        <div>
          <h3>No custom ROMs added yet</h3>
          <p>This section is ready for future GT 20 Pro custom ROM builds.</p>
        </div>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="rom-grid">
      ${category.roms
        .map((rom) => {
          const subtitle = rom.subtitle ? `<p>${escapeHtml(rom.subtitle)}</p>` : "";
          return `
            <article class="card rom-card" style="--accent: ${category.accent}">
              <div class="card-top">
                <span class="card-icon" aria-hidden="true">${category.icon}</span>
                <span class="status-pill">${escapeHtml(rom.status)}</span>
              </div>
              <h3>${escapeHtml(rom.title)}</h3>
              ${subtitle}
              <div class="meta-row">
                <span class="chip">${escapeHtml(rom.architecture || "64-Bit")}</span>
                <span class="chip">${escapeHtml(rom.source)}</span>
              </div>
              <p>${escapeHtml(rom.intro)}</p>
              <a class="button" href="#rom/${categoryId}/${rom.id}">Open file</a>
            </article>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderStockOptions(rom, categoryId) {
  return `
    <div class="option-grid">
      ${rom.options
        .map(
          (option) => `
            <article class="option-card" style="--accent: ${romData[categoryId].accent}">
              <h3>${escapeHtml(option.title)}</h3>
              <p>${escapeHtml(option.description)}</p>
              ${actionLink(option.link, option.label)}
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderSections(sections = []) {
  return sections
    .map((section) => {
      const listTag = section.ordered ? "ol" : "ul";
      const toneClass =
        section.tone === "note" ? "note-card" : section.tone === "warning" ? "warning-card" : "";
      return `
        <section class="detail-card ${toneClass}">
          <h3>${escapeHtml(section.title)}</h3>
          <${listTag}>
            ${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </${listTag}>
        </section>
      `;
    })
    .join("");
}

function renderRom(categoryId, romId) {
  const category = romData[categoryId];
  const rom = category?.roms.find((item) => item.id === romId);
  if (!category || !rom) {
    renderHome();
    return;
  }

  setHeader({
    eyebrow: category.title,
    title: rom.title,
    subtitle: rom.subtitle || rom.intro,
    showBack: true,
    backTarget: `#category/${categoryId}`,
  });
  setActiveNav(categoryId);

  const extraLinks = (rom.extraLinks || [])
    .map((link) => actionLink(link.url, link.label, "ghost"))
    .join("");

  app.innerHTML = `
    <div class="detail-layout">
      <article class="detail-card">
        <div class="detail-title">
          <h3>${escapeHtml(rom.title)}</h3>
          <span class="status-pill">${escapeHtml(rom.status)}</span>
        </div>
        <div class="meta-row">
          <span class="chip">${escapeHtml(rom.architecture || "64-Bit")}</span>
          <span class="chip">${escapeHtml(rom.source)}</span>
          <span class="chip">${escapeHtml(rom.base)}</span>
        </div>
        <p>${escapeHtml(rom.intro)}</p>
        <div class="action-row">
          ${rom.options ? "" : actionLink(rom.download, rom.downloadLabel || "Download ROM", "primary")}
          ${extraLinks}
        </div>
      </article>
      <aside class="detail-card note-card">
        <h3>Before flashing</h3>
        <ul>
          <li>Take a full backup before changing ROMs.</li>
          <li>Use the exact file for GT 20 Pro.</li>
          <li>Read bugs and requirements before rebooting.</li>
        </ul>
      </aside>
      ${rom.options ? renderStockOptions(rom, categoryId) : renderSections(rom.sections)}
    </div>
  `;
}

function route() {
  const hash = window.location.hash.replace(/^#/, "");
  const [view, categoryId, romId] = hash.split("/");

  if (!hash || view === "home") {
    renderHome();
    return;
  }

  if (view === "category") {
    renderCategory(categoryId);
    return;
  }

  if (view === "rom") {
    renderRom(categoryId, romId);
    return;
  }

  renderHome();
}

backButton.addEventListener("click", () => {
  window.location.hash = backButton.dataset.target || "#home";
});

window.addEventListener("hashchange", route);
route();