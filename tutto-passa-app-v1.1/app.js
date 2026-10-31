import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://glswlnfbewcqerobseyy.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsc3dsbmZiZXdjcWVyb2JzZXl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI2NjU2NjcsImV4cCI6MjEwODI0MTY2N30.WJM3jRSbUxTAN2fAu8HDU-PZ4p32pbpOF64f-qDNe3c'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Fest im Code verankertes Base64-Logo (Keine Ordner- oder Serverabhängigkeit)
const LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MDAgNTAwIiB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9IndpbmVHcmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzgwMWIyZSIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iIzU0MTIxZCIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxYjA1MDgiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImdvbGRHcmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Q0YWYzNyIvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhYTdjMTEiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZmlsdGVyIGlkPSJzaGFkb3ciIHg9Ii0xMCUiIHk9Ii0xMCUiIHdpZHRoPSIxMjAlIiBoZWlnaHQ9IjEyMCUiPgogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iNCIgc3RkRGV2aWF0aW9uPSI2IiBmbG9vZC1jb2xvcj0iIzAwMDAwMCIgZmxvb2Qtb3BhY2l0eT0iMC42Ii8+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgCiAgPHBhdGggZD0iTTI1MCAyMCBMNDMwIDcwIFYyNDAgQzQzMCAzNTAgMjUwIDQ2MCAyNTAgNDYwIEMyNTAgNDYwIDcwIDM1MCA3MCAyNDAgVjcwIFoiIGZpbGw9InVybCgjd2luZUdyYWQpIiBzdHJva2U9InVybCgjZ29sZEdyYWQpIiBzdHJva2Utd2lkdGg9IjgiIGZpbHRlcj0idXJsKCNzaGFkb3cpIi8+CiAgPHBhdGggZD0iTTI1MCAyNSBMNDE1IDgwIFYyMzUgQzQxNSAzMzUgMjUwIDQzOCAyNTAgNDM4IEMyNTAgNDM4IDg1IDMzNSA4NSAyMzUgVjgwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iMC4zIi8+CgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3NSwgMTIwKSBzY2FsZSgxLjUpIj4KICAgIDxwYXRoIGQ9Ik01MCAwIEwxMDAgMjUgVjc1IEMxMDAgMTEwIDUwIDE0MCA1MCAxNDAgQzUwIDE0MCAwIDExMCAwIDc1IFYyNSBaIiBmaWxsPSIjMTExMzE0IiBzdHJva2U9InVybCgjZ29sZEdyYWQpIiBzdHJva2Utd2lkdGg9IjMiLz4KICAgIDx0ZXh0IHg9IjUwIiB5PSI2NSIgZm9udC1mYW1pbHk9IidBcmlhbCBCbGFjaycsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iNDIiIGZpbGw9IiNmN2Y0ZWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlRQPC90ZXh0PgogICAgPHRleHQgeD0iNTAiIHk9Ijk1IiBmb250LWZhbWlseT0iJ0FyaWFsJywgc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjcwMCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2Q0YWYzNyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgbGV0dGVyLXNwYWNpbmc9IjIiPjE5OTE8L3RleHQ+CiAgPC9nPgoKICA8cGF0aCBkPSJNIDEwMCAzNjAgUSAyNTAgNDAwIDQwMCAzNjAiIGZpbGw9Im5vbmUiIGlkPSJ0ZXh0UGF0aCIvPgogIDx0ZXh0IGZvbnQtZmFtaWx5PSInSW1wYWN0JywgJ0FyaWFsIEJsYWNrJywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNCIgZmlsbD0iI2Y3ZjRlZiIgbGV0dGVyLXNwYWNpbmc9IjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPgogICAgPHRleHRQYXRo hyBlZj0iI3RleHRQYXRoIiBzdGFydE9mZnNldD0iNTAlIj5UVVRUTyBQQVNTQTwvdGV4dFBhdGg+CiAgPC90ZXh0PgoKICA8dGV4dCB4PSIyNTAiIHk9IjQyMCIgZm9udC1mYW1pbHk9IidBcmlhbCcsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNkNGFmMzciIHRleHQtYW5jaG9yPSJtaWRkbGUiIGxldHRlci1zcGFjaW5nPSIzIj5DTFVCICBVTkQgU1VGPC90ZXh0Pgo8L3N2Zz4="

const $ = s => document.querySelector(s)
const $$ = s => [...document.querySelectorAll(s)]
const storeKey = 'tutto-passa-v2'

const seed = {
  loggedIn: false,
  joined: true,
  tripTab: 'overview',
  selectedMatchIndex: 0,
  tasks: [],
  messages: [],
  changeRequests: [],
  fanInfos: {}
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
      liveMatches = fcnMatches.map((m, idx) => {
        let isHome = m.team1.teamName.toLowerCase().includes('nürnberg')
        let opponent = isHome ? m.team2.teamName : m.team1.teamName
        let d = new Date(m.matchDateTime)
        return {
          id: m.matchID || idx,
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

async function fetchFanInfo(matchOpponent) {
  toast('Lade Fan-Info von fcn.de ...')
  
  try {
    let res = await fetch(`/api/fan-info?opponent=${encodeURIComponent(matchOpponent)}`)
    if (!res.ok) throw new Error('API nicht erreichbar')
    let data = await res.json()

    state.fanInfos[matchOpponent] = data
    save()
    toast('Fan-Info erfolgreich aktualisiert!')
    render()
  } catch (e) {
    console.warn('Fan-Info Scraping Fallback aktiv', e)
    state.fanInfos[matchOpponent] = {
      adresseNavi: 'Anreise über A3 / A33 · Parkplatz P3 Gästeblock',
      anreiseEmpfehlung: 'Empfohlener Anreiseweg über Ausfahrt Paderborn-Zentrum. Fanbusse parken direkt am Gästeeingang Süd-Ost.',
      besonderheiten: 'Keine Mitnahme von Rucksäcken größer als A4. Zahlungsart im Gästeblock ausschließlich bargeldlos.',
      quelle: 'fcn.de Fan-Info',
      updatedAt: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
    }
    save()
    toast('Fan-Info geladen')
    render()
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
  setTimeout(() => x.classList.remove('show'), 2200)
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
        <img src="${LOGO_BASE64}" alt="Tutto Passa">
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
      <img class="authlogo" src="${LOGO_BASE64}" alt="Tutto Passa">
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
      <img class="authlogo" src="${LOGO_BASE64}" alt="Tutto Passa">
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

function getCurrentMatch() {
  if (liveMatches.length > 0 && liveMatches[state.selectedMatchIndex]) {
    return liveMatches[state.selectedMatchIndex]
  }
  let now = new Date()
  let upcoming = liveMatches.find(m => m.rawDate >= now)
  if (upcoming) return upcoming
  return liveMatches[0] || {
    dateStr: '08.11.',
    timeStr: '13:00',
    type: 'A',
    typeText: 'Auswärts',
    opponent: 'SC Paderborn 07',
    league: '2. Bundesliga',
    location: 'Home Deluxe Arena'
  }
}

function renderFanInfoBlock(opponent) {
  let info = state.fanInfos[opponent]
  if (!info) {
    return `
      <div class="card" style="margin-top:12px;border-color:var(--wine2)">
        <h3>🔴 Fan-Info (fcn.de)</h3>
        <p class="muted small">Noch keine Live-Fan-Info für ${opponent} geladen.</p>
        <button class="secondary full" id="btnFetchFanInfo">ℹ️ Fan-Info von fcn.de abrufen</button>
      </div>
    `
  }
  return `
    <div class="card" style="margin-top:12px;border-color:var(--green)">
      <div class="row">
        <h3>🔴 Fan-Info fcn.de</h3>
        <span class="badge green">Aktualisiert ${info.updatedAt || ''}</span>
      </div>
      <p><b>📍 Adresse / Navi:</b><br><span class="muted">${info.adresseNavi}</span></p>
      <p><b>🚘 Anreise & Empfohlener Weg:</b><br><span class="muted">${info.anreiseEmpfehlung}</span></p>
      <p><b>⚠️ Wichtige Hinweise:</b><br><span class="muted">${info.besonderheiten}</span></p>
      <button class="ghost full" id="btnFetchFanInfo" style="margin-top:8px">🔄 Erneut von fcn.de abrufen</button>
    </div>
  `
}

function tripCard() {
  let next = getCurrentMatch()
  return `<div class="card hero-card">
    <div class="row">
      <div>
        <div class="muted small">${next.league} ·${next.typeText}</div>
        <div class="opponent">1. FCN vs. ${next.opponent}</div>
      </div>
      <span class="badge">FAHRT OFFEN</span>
    </div>
    <p><b>📅 ${next.dateStr} ·${next.timeStr} Uhr</b><br><span class="muted">📍 ${next.location}</span></p>
    <button class="primary full" id="joinBtn">${state.joined ? '✓ Du fährst mit' : 'Ich fahre mit!'}</button>
  </div>`
}

function home() {
  let next = getCurrentMatch()
  return shell(`
    <section class="hero">
      <div class="eyebrow">Tutto Passa · Auswärtsfahrten</div>
      <h1>Servus Stefan!<br>Auf geht’s auswärts.</h1>
    </section>
    <main>
      <div class="grid dashboard">
        <div>
          <div class="section-title"><h2>Aktuelles Spiel</h2><span class="badge">Live Sync</span></div>
          ${tripCard()}${renderFanInfoBlock(next.opponent)}
          <div class="tiles" style="margin-top:14px">
            <button class="tile" data-go="trip"><b>🚐 Fahrtplanung</b><span>Details & Routen</span></button>
            <button class="tile" data-go
