/* ============================================================
   Ang Family Tree — Application Logic
   Sections: Data · Render · Toolbar actions · Colors ·
   Print/PDF · Edit panels · Export/Import · Search
   ============================================================ */

const INITIAL_DATA = /*DATA_START*/{"name":"Late Ang Chooi Kuan","spouse":null,"note":"Grand Old Man (Paternal). Wives: (1) Late Mdm ?, (2) Late Mdm ?, (3) Late Mdm Neoh Cheng Pan","deceased":true,"children":[{"name":"Late Ang Ee Hean","spouse":"Late Lee Gaik Ean","note":null,"deceased":true,"children":[{"name":"Late Ang Siew Tiew","spouse":"Late Loo Hock Toh","note":null,"deceased":true,"children":[{"name":"Late Loo Suan Kee","spouse":null,"note":null,"deceased":true,"children":[]},{"name":"Late Loo Leong Hoe","spouse":null,"note":null,"deceased":true,"children":[]},{"name":"Loo Bee Ai","spouse":"Late Leow Kooi Chuan","note":null,"deceased":false,"children":[{"name":"Leow Jack Gene","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Leow Jo Lene","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Loo Leong Sooi","spouse":"Lee Khim","note":null,"deceased":false,"children":[{"name":"Loo Joel","spouse":"Tan Huay Woon","note":null,"deceased":false,"children":[{"name":"Loo Kayla","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Loo Robin","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Loo Joshern","spouse":"Low Ley Ying","note":null,"deceased":false,"children":[{"name":"Olivia Loo","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Sebastian Loo","spouse":null,"note":null,"deceased":false,"children":[]}]}]}]},{"name":"Late Ang Beng Seng","spouse":"Cheang Ah Ngan","note":null,"deceased":true,"children":[{"name":"Ang Bee Ling","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Late Ang Tee Aun","spouse":null,"note":null,"deceased":true,"children":[]}]},{"name":"Ang Siew Im","spouse":"Late Chan Soon Moh","note":null,"deceased":false,"children":[{"name":"Chan Bee Lean","spouse":"Kamal Jit Singh","note":null,"deceased":false,"children":[{"name":"Javin Singh","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Careena Kaur","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Chan Bee Suan","spouse":"Steven Kok Chen Nam","note":null,"deceased":false,"children":[{"name":"Kok Min Jean","spouse":"Christopher Alan Shelton","note":null,"deceased":false,"children":[]},{"name":"Kok Eu Jin","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Late Chan Poh Hock","spouse":"Khoo Miaw Ling","note":null,"deceased":true,"children":[{"name":"Chan Charmaine","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Chan Calvin","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Chan Bee Geok","spouse":"(a) Tong Veng Leong; (b) Jeffrey Ooi Soo Ching","note":null,"deceased":false,"children":[{"name":"Tong Jae Shaun","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Tong Jae Ian","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ooi Jayden","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Chan Poh Huat","spouse":"Chin Mei Mei","note":null,"deceased":false,"children":[{"name":"Chan Shalynne","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Chan Sulynne","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Chan Shayden","spouse":null,"note":null,"deceased":false,"children":[]}]}]},{"name":"Ang Siew Hong","spouse":"Late Khoo Soo Beng","note":null,"deceased":false,"children":[{"name":"Khoo Hock Seng","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"June Khoo","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Khoo Hock Chuan","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Beng Teik","spouse":"(a) Lucy Goh; (b) Sandra Lin Ya Ho","note":null,"deceased":false,"children":[{"name":"Ang Boon Chong","spouse":"Chan Yuen Hong","note":null,"deceased":false,"children":[{"name":"Ang Wei Lyn","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ang Wei Liane","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Boon Cheng","spouse":"Maggie Koh Mei Yee","note":null,"deceased":false,"children":[{"name":"Isaac Ang Ziyong","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Isabelle Ang Shalom","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ivanna Ang Shauna","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ileeya Sofia Ang","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Bee Chiau","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Siew Hoon / Yeap Siew Hoon","spouse":"Late Leow Kim Kooi","note":null,"deceased":false,"children":[{"name":"Leow Hong Ee","spouse":"Lim Seng Hnuah","note":null,"deceased":false,"children":[{"name":"Adam Lim Chiang Wee","spouse":"Ooi Tzu Ling","note":null,"deceased":false,"children":[{"name":"Novelle Ooi Ee Yuet","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Sarah Lim En Peng","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Leow Hong Ai","spouse":"Ooi Kok Kan","note":null,"deceased":false,"children":[{"name":"Ooi Kah Wai","spouse":"Ong G Ling","note":null,"deceased":false,"children":[]},{"name":"Ooi Chia Ween","spouse":"Goh Han Pin","note":null,"deceased":false,"children":[{"name":"Goh Hong Jie","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Goh Pei Yi","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Goh Hong Chen","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ooi Chia Mei","spouse":"Ang Jin Liang","note":null,"deceased":false,"children":[{"name":"Ang Chern Eu","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ang Chern Yen","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ooi Kah Chun","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Leow Eng Tat","spouse":"Teng Hsia See","note":null,"deceased":false,"children":[]},{"name":"Leow Eng Wah","spouse":"Yew Siew Hoon","note":null,"deceased":false,"children":[{"name":"Leow Jia Ying","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Leow Yu Heng","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Leow Jia Xin","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Leow Yu Ping","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Leow Hong Nee","spouse":"Lee Chun Cheow","note":null,"deceased":false,"children":[{"name":"Lee Vee Hang","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Lee Vee Haur","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Lee Vee Tong","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Lee Vee Rou","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Lee Vee Zher","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Leow Eng Boon","spouse":"Ng Hui Chin","note":null,"deceased":false,"children":[{"name":"Leow Yu Yang","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Leow Yu Han","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Leow Yu Xun","spouse":null,"note":null,"deceased":false,"children":[]}]}]},{"name":"Late Ang Beng Teng","spouse":"Late Lim Siew Ngoh","note":null,"deceased":true,"children":[{"name":"Ang Boon Jin","spouse":"Cheong Wooi Kian","note":null,"deceased":false,"children":[{"name":"Ang Jas Min","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ang Jo Wee","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ang Jo Vin","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Boon Aik","spouse":"Miyuki Handa","note":null,"deceased":false,"children":[{"name":"Ang Joshua","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Ang Aiden Johan","spouse":null,"note":null,"deceased":false,"children":[]}]}]},{"name":"Ang Beng Kiat","spouse":"Tan Saw Sim","note":null,"deceased":false,"children":[{"name":"Ang Bee Chin","spouse":"Chin Hock Meng","note":null,"deceased":false,"children":[{"name":"Chin Shawn Young","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Chin Shane Wei","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Chin Shae Shen","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Bee Choo","spouse":"Ryan Liew Whye Earn","note":null,"deceased":false,"children":[{"name":"Jason Liew Han Yang","spouse":"Jayme Foong Jeng Yee","note":null,"deceased":false,"children":[{"name":"Adrian Liew Wen Jie","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Cheryl Liew Xin Lin","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Cheryn Liew Qian Ling","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Ang Bee Guat","spouse":"Ooi Keeh Wan","note":null,"deceased":false,"children":[{"name":"Danny Ooi Sey Howe","spouse":"Nicole Yap Ching Li","note":null,"deceased":false,"children":[{"name":"Tiffany Ooi Shu Yee","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Tommy Ooi Shun Jet","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Caryn Ooi Sin Yee","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Dillon Ooi Choon Howe","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Late Ang Boon Khoon","spouse":"Amanda Marissa Narcis","note":null,"deceased":true,"children":[{"name":"Chloe Ang Shin Rei","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Clare Ang Shin Ren","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Gerard Ang Jo Sheng","spouse":null,"note":null,"deceased":false,"children":[]}]}]},{"name":"Ang Siew Gim","spouse":"Late Kee Lek Hong","note":null,"deceased":false,"children":[{"name":"Honey Kee Pei Pei","spouse":"Kenny Yip Kean Hoong","note":null,"deceased":false,"children":[{"name":"Joselynn Yip Zoe Yee","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Jesslynn Yip Zoe Jie","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Jacclynn Yip Zoe Ching","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Julie Kee Suet Ping","spouse":"Michael James Finch","note":null,"deceased":false,"children":[{"name":"Charlotte Beatrice Kee Finch","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Thomas James Kee Finch","spouse":null,"note":null,"deceased":false,"children":[]}]}]},{"name":"Ang Beng Lee","spouse":"Narinderjeet Kaur","note":null,"deceased":false,"children":[{"name":"Jessie Ang Ai Lin","spouse":"Michael Frithiof Olsen","note":null,"deceased":false,"children":[{"name":"Makensie Alyssa Olsen","spouse":null,"note":null,"deceased":false,"children":[]},{"name":"Isaac Harry Olsen","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Joachim Ang Cheng Poe","spouse":null,"note":null,"deceased":false,"children":[]}]},{"name":"Late Ang Siew Bee","spouse":null,"note":null,"deceased":true,"children":[]},{"name":"Late Ang Siew Choo","spouse":null,"note":null,"deceased":true,"children":[]},{"name":"Late Ang Siew Bih (Annie)","spouse":null,"note":null,"deceased":true,"children":[]},{"name":"Ang Beng Ee","spouse":"Woo Yoon May","note":null,"deceased":false,"children":[{"name":"Ang Joanne","spouse":"Antony Blackett","note":null,"deceased":false,"children":[]},{"name":"Ang Victor","spouse":"Cathy Ng Mei Xing","note":null,"deceased":false,"children":[{"name":"Ang Cayden","spouse":null,"note":null,"deceased":false,"children":[]}]}]}]},{"name":"Late Ang Kim Keoh","spouse":"Late Lee Kah Char","note":null,"deceased":true,"labelAbove":"Siblings of Late Ang Ee Hean","children":[]},{"name":"Late Ang Kim Luan","spouse":"Late Goh Eng Hooi","note":null,"deceased":true,"children":[]},{"name":"Late Ang Kim Kooi","spouse":"Late Goh Kah Chooi","note":null,"deceased":true,"children":[]},{"name":"Late Ang Kim Keok","spouse":"Late Goh Kah Peng","note":null,"deceased":true,"children":[]},{"name":"Late Ang Kim Yew","spouse":"Late Goh Kim Peng","note":null,"deceased":true,"children":[]},{"name":"Late Ang Kim Eng","spouse":"Late Cheah Gim Hock","note":null,"deceased":true,"children":[]},{"name":"Late Ang Kim Looi","spouse":"Late Lee Chee Seng","note":null,"deceased":true,"children":[]}]}/*DATA_END*/;

const defaultColors = /*COLORS_START*/["#3c595d","#9baf8e","#a98290","#d8aa97","#7f9da4","#bda97f"]/*COLORS_END*/;
let genColors = defaultColors.slice();

let nextId = 1;
function assignIds(node){
  node.id = nextId++;
  node.children = node.children || [];
  node.children.forEach(assignIds);
  return node;
}
let DATA = assignIds(JSON.parse(JSON.stringify(INITIAL_DATA)));

const root = document.getElementById('treeRoot');
const collapsedIds = new Set();
let editMode = false;

function findNode(node, id, parent){
  if(node.id === id) return {node, parent};
  for(const c of node.children){
    const r = findNode(c, id, node);
    if(r) return r;
  }
  return null;
}

function isDescendant(node, targetId){
  if(node.id === targetId) return true;
  return node.children.some(c => isDescendant(c, targetId));
}

function buildNode(node, depth){
  const li = document.createElement('li');
  const hasKids = node.children && node.children.length>0;

  if(node.labelAbove){
    const label = document.createElement('div');
    label.className = 'tree-label';
    const txt = document.createElement('div');
    txt.className = 'txt';
    txt.textContent = node.labelAbove;
    label.appendChild(txt);
    const rule = document.createElement('div');
    rule.className = 'rule';
    label.appendChild(rule);
    const labelEdit = document.createElement('div');
    labelEdit.className = 'label-edit';
    labelEdit.textContent = '✎';
    labelEdit.title = 'Edit this label';
    labelEdit.addEventListener('click', (e) => {
      e.stopPropagation();
      openLabelPanel(node.id);
    });
    label.appendChild(labelEdit);
    li.appendChild(label);
  }

  const row = document.createElement('div');
  row.className = 'node';

  const toggle = document.createElement('div');
  toggle.className = 'toggle' + (hasKids ? '' : ' empty');
  toggle.textContent = hasKids ? (collapsedIds.has(node.id) ? '+' : '−') : '';
  if(hasKids){
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if(collapsedIds.has(node.id)) collapsedIds.delete(node.id);
      else collapsedIds.add(node.id);
      render();
    });
  }
  row.appendChild(toggle);

  const dot = document.createElement('div');
  dot.className = 'gen-dot';
  dot.style.background = genColors[Math.min(depth, genColors.length-1)];
  row.appendChild(dot);

  const info = document.createElement('div');
  info.className = 'info';
  const nameEl = document.createElement('div');
  nameEl.className = 'name' + (node.deceased ? ' deceased' : '');
  nameEl.textContent = node.name;
  info.appendChild(nameEl);
  if(node.spouse){
    const sp = document.createElement('div');
    sp.className = 'spouse';
    sp.textContent = 'm. ' + node.spouse;
    info.appendChild(sp);
  }
  if(node.note){
    const nt = document.createElement('div');
    nt.className = 'note';
    nt.textContent = node.note;
    info.appendChild(nt);
  }
  row.appendChild(info);

  const editIcon = document.createElement('div');
  editIcon.className = 'edit-icon';
  editIcon.textContent = '✎';
  editIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    openEditPanel(node.id);
  });
  row.appendChild(editIcon);

  li.appendChild(row);

  li._searchText = (node.name + ' ' + (node.spouse||'')).toLowerCase();
  li._row = row;

  if(hasKids && !collapsedIds.has(node.id)){
    const childUl = document.createElement('ul');
    node.children.forEach(c => childUl.appendChild(buildNode(c, depth+1)));
    li.appendChild(childUl);
  }
  return li;
}

function render(){
  root.innerHTML = '';
  root.appendChild(buildNode(DATA, 0));
  document.body.classList.toggle('edit-mode', editMode);
}
render();

document.getElementById('expandAll').addEventListener('click', () => {
  collapsedIds.clear();
  render();
});
document.getElementById('collapseAll').addEventListener('click', () => {
  (function walk(n){ if(n.children.length){ collapsedIds.add(n.id); n.children.forEach(walk); } })(DATA);
  collapsedIds.delete(DATA.id);
  render();
});

const editToggle = document.getElementById('editToggle');
const editHint = document.getElementById('edit-hint');
const addRootBtn = document.getElementById('addRoot');
editToggle.addEventListener('click', () => {
  editMode = !editMode;
  editToggle.classList.toggle('on', editMode);
  editHint.style.display = editMode ? '' : 'none';
  addRootBtn.style.display = editMode ? '' : 'none';
  render();
});

/* ---------- Colors ---------- */
const colorInputs = [0,1,2,3,4,5].map(i => document.getElementById('c'+i));
const printSwatches = [0,1,2,3,4,5].map(i => document.getElementById('ps'+i));
function syncPrintSwatches(){
  printSwatches.forEach((sw, i) => sw.style.background = genColors[i]);
}
colorInputs.forEach((inp, i) => {
  inp.value = genColors[i];
  inp.addEventListener('input', () => {
    genColors[i] = inp.value;
    genColors[6] = genColors[5];
    syncPrintSwatches();
    render();
  });
});
document.getElementById('resetColors').addEventListener('click', () => {
  genColors = defaultColors.slice();
  colorInputs.forEach((inp, i) => inp.value = genColors[i]);
  syncPrintSwatches();
  render();
});
syncPrintSwatches();

/* ---------- Save as PDF (browser print) ---------- */
let preprintCollapsed = null;
let preprintEditMode = null;
document.getElementById('savePdf').addEventListener('click', () => {
  overlay.classList.remove('show');
  preprintCollapsed = new Set(collapsedIds);
  preprintEditMode = editMode;
  collapsedIds.clear();
  if(editMode){
    editMode = false;
    editToggle.classList.remove('on');
    editHint.style.display = 'none';
    addRootBtn.style.display = 'none';
  }
  render();
  setTimeout(() => window.print(), 80);
});
window.addEventListener('afterprint', () => {
  if(preprintCollapsed !== null){
    collapsedIds.clear();
    preprintCollapsed.forEach(id => collapsedIds.add(id));
    preprintCollapsed = null;
    if(preprintEditMode){
      editMode = true;
      editToggle.classList.add('on');
      editHint.style.display = '';
      addRootBtn.style.display = '';
    }
    preprintEditMode = null;
    render();
  }
});

/* ---------- Edit panel ---------- */
const overlay = document.getElementById('overlay');
const panelTitle = document.getElementById('panelTitle');
const fName = document.getElementById('f-name');
const fSpouse = document.getElementById('f-spouse');
const fNote = document.getElementById('f-note');
const fDeceased = document.getElementById('f-deceased');
const fParent = document.getElementById('f-parent');
const parentWrap = document.getElementById('f-parent-wrap');
let editingId = null;

function openEditPanel(id){
  editingId = id;
  const {node, parent} = findNode(DATA, id, null);
  panelTitle.textContent = 'Edit person';
  fName.value = node.name || '';
  fSpouse.value = node.spouse || '';
  fNote.value = node.note || '';
  fDeceased.checked = !!node.deceased;

  fParent.innerHTML = '';
  if(node.id === DATA.id){
    parentWrap.style.display = 'none';
  } else {
    parentWrap.style.display = '';
    (function walk(n, prefix){
      if(!isDescendant(node, n.id)){
        const opt = document.createElement('option');
        opt.value = n.id;
        opt.textContent = prefix + n.name;
        if(parent && n.id === parent.id) opt.selected = true;
        fParent.appendChild(opt);
      }
      n.children.forEach(c => walk(c, prefix + '— '));
    })(DATA, '');
  }
  overlay.classList.add('show');
}

document.getElementById('p-cancel').addEventListener('click', () => overlay.classList.remove('show'));
overlay.addEventListener('click', (e) => { if(e.target === overlay) overlay.classList.remove('show'); });

document.getElementById('p-save').addEventListener('click', () => {
  const {node, parent} = findNode(DATA, editingId, null);
  node.name = fName.value.trim() || 'Unnamed';
  node.spouse = fSpouse.value.trim() || null;
  node.note = fNote.value.trim() || null;
  node.deceased = fDeceased.checked;

  if(node.id !== DATA.id){
    const newParentId = parseInt(fParent.value, 10);
    if(parent && newParentId !== parent.id){
      parent.children = parent.children.filter(c => c.id !== node.id);
      const {node: newParent} = findNode(DATA, newParentId, null);
      newParent.children.push(node);
    }
  }
  overlay.classList.remove('show');
  render();
});

/* ---------- Divider line panel (separate from person edit panel) ---------- */
const labelOverlay = document.getElementById('labelOverlay');
const labelPanelTitle = document.getElementById('labelPanelTitle');
const lpText = document.getElementById('lp-text');
let labelEditingId = null;

function openLabelPanel(id){
  labelEditingId = id;
  const {node} = findNode(DATA, id, null);
  labelPanelTitle.textContent = 'Divider line above "' + node.name + '"';
  lpText.value = node.labelAbove || '';
  labelOverlay.classList.add('show');
  lpText.focus();
}

document.getElementById('p-divider').addEventListener('click', () => {
  overlay.classList.remove('show');
  openLabelPanel(editingId);
});

document.getElementById('lp-cancel').addEventListener('click', () => labelOverlay.classList.remove('show'));
labelOverlay.addEventListener('click', (e) => { if(e.target === labelOverlay) labelOverlay.classList.remove('show'); });

document.getElementById('lp-save').addEventListener('click', () => {
  const {node} = findNode(DATA, labelEditingId, null);
  node.labelAbove = lpText.value.trim() || null;
  labelOverlay.classList.remove('show');
  render();
});

document.getElementById('lp-remove').addEventListener('click', () => {
  const {node} = findNode(DATA, labelEditingId, null);
  node.labelAbove = null;
  labelOverlay.classList.remove('show');
  render();
});

document.getElementById('p-addchild').addEventListener('click', () => {
  const {node} = findNode(DATA, editingId, null);
  const child = {id: nextId++, name: 'New Person', spouse: null, note: null, deceased: false, labelAbove: null, children: []};
  node.children.push(child);
  collapsedIds.delete(node.id);
  overlay.classList.remove('show');
  render();
  openEditPanel(child.id);
});

document.getElementById('p-delete').addEventListener('click', () => {
  const {node, parent} = findNode(DATA, editingId, null);
  if(node.id === DATA.id){ alert("The root person can't be deleted."); return; }
  const kidCount = (function count(n){ return 1 + n.children.reduce((a,c)=>a+count(c),0); })(node) - 1;
  const msg = kidCount > 0
    ? `Delete ${node.name} and their ${kidCount} descendant${kidCount===1?'':'s'}?`
    : `Delete ${node.name}?`;
  if(!confirm(msg)) return;
  parent.children = parent.children.filter(c => c.id !== node.id);
  overlay.classList.remove('show');
  render();
});

addRootBtn.addEventListener('click', () => {
  const child = {id: nextId++, name: 'New Person', spouse: null, note: null, deceased: false, labelAbove: null, children: []};
  DATA.children.push(child);
  render();
  openEditPanel(child.id);
});

/* ---------- Export / Import ---------- */
function stripIds(node){
  const {id, ...rest} = node;
  return {...rest, children: node.children.map(stripIds)};
}

/* ---------- Export as standalone HTML (single file, edits baked in) ----------
   Since the app now lives in three files (index.html / style.css / script.js),
   we rebuild a single self-contained HTML file on demand by fetching the CSS
   and JS text and inlining them, with the current tree data + colors baked in.
   Note: this requires the three files to be served over http(s) — opening
   index.html directly as a local file (file://) blocks the fetch() calls
   below in most browsers. Run a local server (e.g. `npx serve`) or host the
   files, and the export will work normally. */
document.getElementById('downloadHtml').addEventListener('click', async () => {
  overlay.classList.remove('show');

  let cssText, jsText;
  try{
    [cssText, jsText] = await Promise.all([
      fetch('style.css').then(r => r.text()),
      fetch('script.js').then(r => r.text())
    ]);
  }catch(err){
    alert('Could not build the standalone file because the browser blocked reading style.css / script.js from disk.\n\nThis works when the three files are served over http(s) (e.g. via a local server or hosting) rather than opened directly as a local file. As a workaround, you can use "Download edits as .json" to save your changes instead.');
    return;
  }

  const dataJson = JSON.stringify(stripIds(DATA));
  jsText = jsText.replace(/\/\*DATA_START\*\/[\s\S]*?\/\*DATA_END\*\//, '/*DATA_START*/' + dataJson + '/*DATA_END*/');

  const colorsJson = JSON.stringify(genColors.slice(0,6));
  jsText = jsText.replace(/\/\*COLORS_START\*\/[\s\S]*?\/\*COLORS_END\*\//, '/*COLORS_START*/' + colorsJson + '/*COLORS_END*/');

  let src = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
  src = src.replace(
    /<link[^>]*rel=["']stylesheet["'][^>]*href=["']style\.css["'][^>]*>/,
    '<style>\n' + cssText + '\n</style>'
  );
  src = src.replace(
    /<script[^>]*src=["']script\.js["'][^>]*><\/script>/,
    '<script>\n' + jsText + '\n</script>'
  );

  const blob = new Blob([src], {type: 'text/html'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ang_family_tree.html';
  a.click();
});

document.getElementById('downloadJson').addEventListener('click', () => {
  const payload = {tree: stripIds(DATA), colors: genColors};
  const blob = new Blob([JSON.stringify(payload, null, 2)], {type: 'application/json'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'ang_family_tree_data.json';
  a.click();
});

document.getElementById('loadJson').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const parsed = JSON.parse(reader.result);
      const treeData = parsed.tree ? parsed.tree : parsed; // support old exports (plain tree, no colors)
      nextId = 1;
      DATA = assignIds(treeData);
      if(parsed.colors && parsed.colors.length >= 6){
        genColors = parsed.colors.slice();
        colorInputs.forEach((inp, i) => inp.value = genColors[i]);
      }
      collapsedIds.clear();
      render();
    }catch(err){
      alert('Could not read that file — please make sure it is a .json file exported from this tool.');
    }
  };
  reader.readAsText(file);
  e.target.value = '';
});

/* ---------- Search ---------- */
const searchInput = document.getElementById('search');
const matchCount = document.getElementById('match-count');

function clearHighlight(){
  root.querySelectorAll('.hit').forEach(el => el.classList.remove('hit'));
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  clearHighlight();
  if(!q){ matchCount.textContent=''; return; }

  let count = 0;
  function walk(node, ancestors){
    const text = (node.name + ' ' + (node.spouse||'')).toLowerCase();
    if(text.includes(q)){
      count++;
      ancestors.forEach(a => collapsedIds.delete(a));
    }
    node.children.forEach(c => walk(c, [...ancestors, node.id]));
  }
  walk(DATA, []);
  render();
  root.querySelectorAll('li').forEach(li => {
    if(li._searchText.includes(q)) li._row.classList.add('hit');
  });

  matchCount.textContent = count + (count===1 ? ' match found' : ' matches found');
});