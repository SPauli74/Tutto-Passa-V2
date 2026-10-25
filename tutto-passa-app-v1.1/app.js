import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://glswlnfbewcqerobseyy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsc3dsbmZiZXdjcWVyb2JzZXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NjU2NjcsImV4cCI6MjEwODI0MTY2N30.WJM3jRSbUxTAN2fAu8HDU-PZ4p32pbpOF64f-qDNe3c'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

const $ = s => document.querySelector(s)
const $$ = s => [...document.querySelectorAll(s)]
const storeKey = 'tutto-passa-v2'

const seed = {
  loggedIn: false,
  joined: true,
  tripTab: 'overview',
  tasks: [],
  messages: [],
  changeRequests: []
}

let state = JSON.parse(localStorage.getItem(storeKey) || 'null') || seed
let route = location.hash.slice(1) || (state.loggedIn ? 'home' : 'login')
let liveMatches = []

const save = () => localStorage.setItem(storeKey, JSON.stringify(state))

async function fetchOpenLigaDB() {
  try {
    let res = await fetch('https://api.openligadb.de/getmatchdata/bl2/2026')
    let data = await res.json()
    
    let fcnMatches = data.filter(m => 
      m.team1.teamName.toLowerCase().includes('nürnberg') || 
      m.team2.teamName.toLowerCase().includes('nürnberg')
    )

    if (fcnMatches.length > 0) {
      liveMatches = fcnMatches.map(m => {
        let isHome = m.team1.teamName.toLowerCase().includes('nürnberg')
        let opponent = isHome ? m.team2.teamName : m.team1.teamName
        let d = new Date(m.matchDateTime)
        return {
          rawDate: d,
          dateStr: d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' }),
          timeStr: d.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
          type: isHome ? 'H' : 'A',
          typeText: isHome ? 'Heimspiel' : 'Auswärts',
          opponent: opponent,
          league: '2. Bundesliga',
          location: isHome ? 'Max-Morlock-Stadion' : 'Gästeblock'
        }
      }).sort((a, b) => a.rawDate - b.rawDate)
      
      render()
    }
  } catch (e) {
    console.warn('OpenLigaDB Fallback aktiv', e)
  }
}

function toast(t) {
  let x = $('#toast')
  if (!x) {
    x = document.createElement('div')
    x.id = 'toast'
    x.className = 'toast'
    document.body.appendChild(x)
  }
  x.textContent = t
  x.classList.add('show')
  setTimeout(() => x.classList.remove('show'), 1800)
}

function go(r) {
  route = r
  location.hash = r
  render()
  scrollTo(0, 0)
}

function shell(content) {
  return `<div class="shell">
    <header class="topbar">
      <button class="brand" data-go="home">
        <img src="assets/logo-modern.png" alt="Tutto Passa">
        <strong>TUTTO PASSA</strong>
      </button>
      <div class="actions">
        <button class="iconbtn" data-go="notifications" aria-label="Benachrichtigungen">🔔</button>
        <button class="avatar" data-go="profile">SP</button>
      </div>
    </header>
    ${content}
    <nav class="bottomnav">
      <button data-go="home">⌂<span>Start</span></button>
      <button data-go="games">⚽<span>Spiele</span></button>
      <button data-go="trip">🚐<span>Fahrten</span></button>
      <button data-go="chat">●<span>Chat</span></button>
      <button data-go="more">•••<span>Mehr</span></button>
    </nav>
  </div>`
}

function auth() {
  return `<div class="auth">
    <div class="authbox">
      <img class="authlogo" src="assets/logo-modern.png" alt="Tutto Passa">
      <h1>Gemeinsam. Auswärts.<br>Immer weiter.</h1>
      <p class="muted">Liebe · Glaube · Leidenschaft</p>
      <form class="card form" id="loginForm">
        <label>E-Mail-Adresse<input type="email" required value="stefan@example.de"></label>
        <label>Passwort<input type="password" required value="tuttopassa"></label>
        <label class="check"><input type="checkbox"> Angemeldet bleiben</label>
        <button class="primary full">Einloggen</button>
        <button type="button" class="ghost full" data-go="register">Mit Einladungslink registrieren</button>
      </form>
    </div>
  </div>`
}

function register() {
  return `<div class="auth">
    <div class="authbox">
      <img class="authlogo" src="assets/logo-oldschool.png" alt="Tutto Passa">
      <h1>Willkommen bei Tutto Passa!</h1>
      <p class="muted">Du wurdest zu unserer Fangruppe eingeladen.</p>
      <form class="card form" id="registerForm">
        <label>Vorname<input required></label>
        <label>Nachname<input required></label>
        <label>E-Mail-Adresse<input type="email" required></label>
        <label>Passwort<input type="password" required minlength="8"></label>
        <label class="check"><input type="checkbox" required> Datenschutz akzeptieren</label>
        <button class="primary full">Konto erstellen</button>
        <button type="button" class="ghost full" data-go="login">Zur Anmeldung</button>
      </form>
    </div>
  </div>`
}

function getNextMatch() {
  let now = new Date()
  let upcoming = liveMatches.find(m => m.rawDate >= now)
  if (!upcoming && liveMatches.length > 0) upcoming = liveMatches[liveMatches.length - 1]
  return upcoming || {
    dateStr: '08.11.',
    timeStr: '13:00',
    type: 'A',
    typeText: 'Auswärts',
    opponent: 'SC Paderborn 07',
    league: '2. Bundesliga',
    location: 'Home Deluxe Arena'
  }
}

function tripCard() {
  let next = getNextMatch()
  return `<div class="card hero-card">
    <div class="row">
      <div>
        <div class="muted small">${next.league} · ${next.typeText}</div>
        <div class="opponent">1. FCN vs. ${next.opponent}</div>
      </div>
      <span class="badge">FAHRT OFFEN</span>
    </div>
    <p><b>📅 ${next.dateStr} · ${next.timeStr} Uhr</b><br><span class="muted">📍 ${next.location}</span></p>
    <button class="primary full" id="joinBtn">${state.joined ? '✓ Du fährst mit' : 'Ich fahre mit!'}</button>
  </div>`
}

function home() {
  return shell(`
    <section class="hero">
      <div class="eyebrow">Tutto Passa · Auswärtsfahrten</div>
      <h1>Servus Stefan!<br>Auf geht’s auswärts.</h1>
    </section>
    <main>
      <div class="grid dashboard">
        <div>
          <div class="section-title"><h2>Nächstes Spiel</h2><span class="badge">Live Sync</span></div>
          ${tripCard()}
          <div class="tiles">
            <button class="tile" data-go="participants"><b>👥 Teilnehmer</b><span>Status einsehen</span></button>
            <button class="tile" data-go="tasks"><b>📋 Aufgaben</b><span>${state.tasks.filter(t => !t.done).length} offen</span></button>
            <button class="tile" data-go="chat"><b>💬 Chat</b><span>${state.messages.length} Nachrichten</span></button>
          </div>
        </div>
      </div>
    </main>
  `)
}

function gamesView() {
  let gamesList = liveMatches.length > 0 ? liveMatches : [
    { dateStr: '08.11.', timeStr: '13:00', type: 'A', opponent: 'SC Paderborn 07', league: '2. Bundesliga' },
    { dateStr: '22.11.', timeStr: '20:30', type: 'A', opponent: '1. FC Magdeburg', league: '2. Bundesliga' }
  ]

  return shell(`
    <section class="hero">
      <h1>Spiele</h1>
      <p class="muted">Kompletter Spielplan via OpenLigaDB</p>
    </section>
    <main>
      <div class="list">
        ${gamesList.map(g => `
          <div class="listitem">
            <div class="game-date"><b>${g.dateStr}</b><div class="small">${g.timeStr}</div></div>
            <div class="crest">${g.type}</div>
            <div style="flex:1;text-align:left"><b>1. FC Nürnberg vs. ${g.opponent}</b><div class="muted small">${g.league}</div></div>
          </div>
        `).join('')}
      </div>
    </main>
  `)
}

function trip() {
  return shell(`
    <section class="hero">
      <div class="eyebrow">Spieltag</div>
      <h1>Fahrtplanung</h1>
    </section>
    <main>${tripCard()}</main>
  `)
}

function chat() {
  return shell(`
    <section class="hero"><h1>Chat</h1></section>
    <main>
      <div class="chat">
        ${state.messages.map(m => `
          <div class="bubble ${m.mine ? 'mine' : ''}">
            <b>${m.name}</b>
            <div>${m.text}</div>
            <small>${m.time}</small>
          </div>
        `).join('')}
      </div>
      <form class="composer" id="chatForm">
        <input id="chatText" placeholder="Nachricht schreiben …">
        <button>➤</button>
      </form>
    </main>
  `)
}

function more() {
  return shell(`
    <section class="hero"><h1>Mehr</h1></section>
    <main>
      <div class="admin-grid">
        <button class="admin-card" data-go="logout"><b>↪ Abmelden</b><span>Sitzung beenden</span></button>
      </div>
    </main>
  `)
}

function render() {
  const routes = { login: auth, register, home, games: gamesView, trip, chat, more }
  if (route === 'logout') {
    state.loggedIn = false
    save()
    route = 'login'
  }
  const appEl = $('#app')
  if (appEl) {
    appEl.innerHTML = (routes[route] || home)()
  }

  $$('[data-go]').forEach(b => b.onclick = () => go(b.dataset.go))
  $$('.bottomnav button').forEach(b => b.classList.toggle('active', b.dataset.go === route))

  const l = $('#loginForm')
  if (l) l.onsubmit = e => { e.preventDefault(); state.loggedIn = true; save(); go('home') }

  const j = $('#joinBtn')
  if (j) j.onclick = () => {
    state.joined = !state.joined
    save()
    toast(state.joined ? 'Du bist dabei!' : 'Teilnahme zurückgenommen')
    render()
  }

  const cf = $('#chatForm')
  if (cf) cf.onsubmit = e => {
    e.preventDefault()
    const i = $('#chatText')
    if (i && i.value.trim()) {
      state.messages.push({
        name: 'Stefan',
        text: i.value.trim(),
        time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
        mine: true
      })
      save()
      render()
    }
  }
}

window.addEventListener('hashchange', () => {
  route = location.hash.slice(1) || 'home'
  render()
})

fetchOpenLigaDB()
render()

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
}
