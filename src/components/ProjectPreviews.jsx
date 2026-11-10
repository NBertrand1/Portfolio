import React from 'react'

/* ──────────────────────────────────────────
   1. GESTION DES PROJETS URBAINS — CUY
   Dashboard Kanban avec vrais textes et termes clés du domaine
   ────────────────────────────────────────── */
export function CuyPreview() {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Background */}
      <rect width="600" height="340" rx="8" fill="#0b1329" />

      {/* Top bar / Window chrome */}
      <rect width="600" height="38" fill="#131e3a" />
      <circle cx="20" cy="19" r="5" fill="#ef4444" />
      <circle cx="36" cy="19" r="5" fill="#f59e0b" />
      <circle cx="52" cy="19" r="5" fill="#10b981" />
      
      {/* App branding */}
      <text x="74" y="23" fill="#60a5fa" fontSize="11" fontWeight="700" letterSpacing="0.5">CUY · GESTION DE PROJETS URBAINS</text>
      <rect x="360" y="11" width="128" height="18" rx="9" fill="#1e293b" />
      <circle cx="372" cy="20" r="3.5" fill="#10b981" />
      <text x="382" y="23" fill="#94a3b8" fontSize="9.5" fontWeight="500">Sprint 04 · Agile/Scrum</text>
      
      <rect x="500" y="10" width="85" height="20" rx="4" fill="#0d9488" />
      <text x="512" y="23" fill="#ffffff" fontSize="10" fontWeight="600">+ Nouveau jalon</text>

      {/* Sidebar */}
      <rect y="38" width="85" height="302" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
      <g fontSize="9.5" fontWeight="500" fill="#94a3b8">
        <rect x="8" y="52" width="70" height="22" rx="4" fill="#1e293b" />
        <text x="16" y="66" fill="#38bdf8" fontWeight="600">📊 Tableau</text>
        <text x="16" y="94">🚩 Jalons</text>
        <text x="16" y="122">👥 Équipe (8)</text>
        <text x="16" y="150">📁 Tâches</text>
        <text x="16" y="178">📈 Rapports</text>
        <text x="16" y="206">⚙️ Paramètres</text>
      </g>

      {/* Metric Cards */}
      <g transform="translate(98, 48)">
        {/* Card 1 */}
        <rect width="112" height="46" rx="5" fill="#131e3a" stroke="#1e293b" strokeWidth="1" />
        <text x="10" y="18" fill="#94a3b8" fontSize="9" fontWeight="600">PROJETS ACTIFS</text>
        <text x="10" y="38" fill="#f8fafc" fontSize="16" fontWeight="800">12</text>
        <text x="36" y="36" fill="#34d399" fontSize="8.5" fontWeight="600">▲ En cours</text>

        {/* Card 2 */}
        <g transform="translate(122, 0)">
          <rect width="112" height="46" rx="5" fill="#131e3a" stroke="#1e293b" strokeWidth="1" />
          <text x="10" y="18" fill="#94a3b8" fontSize="9" fontWeight="600">SUIVI DES JALONS</text>
          <text x="10" y="38" fill="#38bdf8" fontSize="16" fontWeight="800">85%</text>
          <text x="50" y="36" fill="#94a3b8" fontSize="8.5">Validés</text>
        </g>

        {/* Card 3 */}
        <g transform="translate(244, 0)">
          <rect width="112" height="46" rx="5" fill="#131e3a" stroke="#1e293b" strokeWidth="1" />
          <text x="10" y="18" fill="#94a3b8" fontSize="9" fontWeight="600">TÂCHES SPRINT</text>
          <text x="10" y="38" fill="#fbbf24" fontSize="16" fontWeight="800">24 / 28</text>
        </g>

        {/* Card 4 */}
        <g transform="translate(366, 0)">
          <rect width="118" height="46" rx="5" fill="#131e3a" stroke="#1e293b" strokeWidth="1" />
          <text x="10" y="18" fill="#94a3b8" fontSize="9" fontWeight="600">COLLABORATION</text>
          <text x="10" y="38" fill="#34d399" fontSize="14" fontWeight="800">5 à 10 pers.</text>
        </g>
      </g>

      {/* Kanban Board Columns */}
      {/* Col 1: A FAIRE */}
      <g transform="translate(98, 104)">
        <rect width="156" height="224" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
        <text x="12" y="20" fill="#94a3b8" fontSize="10" fontWeight="700">À FAIRE</text>
        <rect x="62" y="10" width="18" height="14" rx="7" fill="#1e293b" />
        <text x="68" y="21" fill="#94a3b8" fontSize="9" fontWeight="700">2</text>

        {/* Task 1 */}
        <g transform="translate(8, 30)">
          <rect width="140" height="78" rx="5" fill="#162038" stroke="#253356" strokeWidth="1" />
          <rect x="8" y="8" width="55" height="14" rx="3" fill="#dc2626" opacity="0.2" />
          <text x="12" y="18" fill="#f87171" fontSize="8" fontWeight="700">URGENT · CUY</text>
          <text x="8" y="36" fill="#f1f5f9" fontSize="10.5" fontWeight="600">Voiries urbaines zone 3</text>
          <text x="8" y="50" fill="#94a3b8" fontSize="8.5">Attribution : Équipe voirie</text>
          <text x="8" y="68" fill="#64748b" fontSize="8">📅 Échéance : 15 Nov</text>
        </g>

        {/* Task 2 */}
        <g transform="translate(8, 116)">
          <rect width="140" height="72" rx="5" fill="#162038" stroke="#253356" strokeWidth="1" />
          <rect x="8" y="8" width="48" height="14" rx="3" fill="#f59e0b" opacity="0.2" />
          <text x="12" y="18" fill="#fbbf24" fontSize="8" fontWeight="700">EN ATTENTE</text>
          <text x="8" y="36" fill="#f1f5f9" fontSize="10.5" fontWeight="600">Audit éclairage public</text>
          <text x="8" y="50" fill="#94a3b8" fontSize="8.5">Estimation budget & SQL</text>
        </g>
      </g>

      {/* Col 2: EN COURS */}
      <g transform="translate(262, 104)">
        <rect width="160" height="224" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
        <text x="12" y="20" fill="#38bdf8" fontSize="10" fontWeight="700">EN COURS (SPRINT)</text>
        <rect x="125" y="10" width="18" height="14" rx="7" fill="#0369a1" />
        <text x="131" y="21" fill="#e0f2fe" fontSize="9" fontWeight="700">2</text>

        {/* Task 1 */}
        <g transform="translate(8, 30)">
          <rect width="144" height="92" rx="5" fill="#162038" stroke="#0284c7" strokeWidth="1.5" />
          <rect x="8" y="8" width="65" height="14" rx="3" fill="#0284c7" opacity="0.25" />
          <text x="12" y="18" fill="#38bdf8" fontSize="8" fontWeight="700">AGILE / SCRUM</text>
          <text x="8" y="36" fill="#f1f5f9" fontSize="11" fontWeight="700">Suivi des jalons & tâches</text>
          <text x="8" y="50" fill="#94a3b8" fontSize="8.5">Assigné : Cellule Info CUY</text>
          {/* Progress bar */}
          <rect x="8" y="60" width="128" height="6" rx="3" fill="#0b1329" />
          <rect x="8" y="60" width="96" height="6" rx="3" fill="#38bdf8" />
          <text x="8" y="78" fill="#38bdf8" fontSize="8" fontWeight="600">Progression : 75% terminé</text>
        </g>

        {/* Task 2 */}
        <g transform="translate(8, 130)">
          <rect width="144" height="74" rx="5" fill="#162038" stroke="#253356" strokeWidth="1" />
          <text x="8" y="20" fill="#f1f5f9" fontSize="10.5" fontWeight="600">Export rapports Multer</text>
          <text x="8" y="34" fill="#94a3b8" fontSize="8.5">API REST Express & MySQL</text>
          <text x="8" y="58" fill="#10b981" fontSize="8" fontWeight="600">✓ Endpoints sécurisés JWT</text>
        </g>
      </g>

      {/* Col 3: TERMINE */}
      <g transform="translate(430, 104)">
        <rect width="158" height="224" rx="6" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
        <text x="12" y="20" fill="#34d399" fontSize="10" fontWeight="700">TERMINÉ & VALIDÉ</text>
        <rect x="126" y="10" width="18" height="14" rx="7" fill="#065f46" />
        <text x="132" y="21" fill="#a7f3d0" fontSize="9" fontWeight="700">3</text>

        {/* Task 1 */}
        <g transform="translate(8, 30)">
          <rect width="142" height="72" rx="5" fill="#162038" stroke="#059669" strokeWidth="1" />
          <rect x="8" y="8" width="58" height="14" rx="3" fill="#059669" opacity="0.25" />
          <text x="12" y="18" fill="#34d399" fontSize="8" fontWeight="700">LIVRABLE CUY</text>
          <text x="8" y="36" fill="#f1f5f9" fontSize="10.5" fontWeight="600">Auth JWT & Rôles Admin</text>
          <text x="8" y="50" fill="#94a3b8" fontSize="8.5">Base SQL structurée OK</text>
          <text x="8" y="64" fill="#34d399" fontSize="8">✓ Revue de code validée</text>
        </g>

        {/* Task 2 */}
        <g transform="translate(8, 110)">
          <rect width="142" height="72" rx="5" fill="#162038" stroke="#1e293b" strokeWidth="1" />
          <text x="8" y="22" fill="#f1f5f9" fontSize="10.5" fontWeight="600">Tableau de bord React</text>
          <text x="8" y="38" fill="#94a3b8" fontSize="8.5">Interface responsive Vite</text>
          <text x="8" y="58" fill="#34d399" fontSize="8">✓ Déployé en local / test</text>
        </g>
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────
   2. MYTAXAPP
   Plateforme fiscale : formulaire, calculatrice, quittance et reçu
   ────────────────────────────────────────── */
export function MyTaxAppPreview() {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <rect width="600" height="340" rx="8" fill="#042f2e" />

      {/* Top Navbar */}
      <rect width="600" height="40" fill="#022120" />
      <circle cx="24" cy="20" r="10" fill="#10b981" />
      <text x="21" y="24" fill="#022120" fontSize="11" fontWeight="900">₮</text>
      <text x="42" y="24" fill="#f0fdf4" fontSize="12" fontWeight="800">MyTaxApp</text>
      <text x="110" y="24" fill="#6ee7b7" fontSize="10" fontWeight="500">· Portail des Services Fiscaux en Ligne</text>

      <rect x="420" y="10" width="168" height="20" rx="4" fill="#064e3b" />
      <text x="430" y="23" fill="#a7f3d0" fontSize="9.5" fontWeight="600">Contribuable : SARL CAMTECH</text>

      {/* Left Column: Formulaire de Calcul et Déclaration */}
      <g transform="translate(20, 52)">
        <rect width="300" height="274" rx="8" fill="#0a1d1d" stroke="#134e4a" strokeWidth="1" />
        
        {/* Title */}
        <text x="18" y="24" fill="#f0fdf4" fontSize="12" fontWeight="700">Calculateur d’Impôts & Taxes Locales</text>
        <text x="18" y="40" fill="#6ee7b7" fontSize="9">Simulation instantanée et enregistrement fiscal</text>

        {/* Input 1: IFU */}
        <text x="18" y="64" fill="#99f6e4" fontSize="9" fontWeight="600">Numéro Contribuable (IFU / NUI)</text>
        <rect x="18" y="70" width="264" height="28" rx="4" fill="#042f2e" stroke="#115e59" strokeWidth="1" />
        <text x="28" y="88" fill="#ccfbf1" fontSize="10.5" fontFamily="monospace">M072412894532B</text>

        {/* Input 2: Type de taxe */}
        <text x="18" y="116" fill="#99f6e4" fontSize="9" fontWeight="600">Catégorie fiscale sélectionnée</text>
        <g transform="translate(18, 122)">
          <rect width="84" height="22" rx="4" fill="#0d9488" />
          <text x="8" y="15" fill="#ffffff" fontSize="9" fontWeight="700">TVA (19.25%)</text>
          
          <rect x="90" width="84" height="22" rx="4" fill="#042f2e" stroke="#115e59" strokeWidth="1" />
          <text x="100" y="15" fill="#a7f3d0" fontSize="9">Patente locale</text>

          <rect x="180" width="84" height="22" rx="4" fill="#042f2e" stroke="#115e59" strokeWidth="1" />
          <text x="190" y="15" fill="#a7f3d0" fontSize="9">Droit de bail</text>
        </g>

        {/* Input 3: Base imposable */}
        <text x="18" y="164" fill="#99f6e4" fontSize="9" fontWeight="600">Base imposable déclarée (Chiffre d’affaires)</text>
        <rect x="18" y="170" width="264" height="28" rx="4" fill="#042f2e" stroke="#115e59" strokeWidth="1" />
        <text x="28" y="188" fill="#f0fdf4" fontSize="11" fontWeight="700">1 450 000 FCFA</text>

        {/* Action Button */}
        <rect x="18" y="214" width="264" height="34" rx="6" fill="#10b981" />
        <text x="75" y="235" fill="#022120" fontSize="11" fontWeight="800">Calculer & Télé-payer 💳</text>
        <text x="20" y="260" fill="#6ee7b7" fontSize="8.5">Conception Frontend · React + Vite + Tailwind</text>
      </g>

      {/* Right Column: Reçu Officiel & Récapitulatif */}
      <g transform="translate(336, 52)">
        <rect width="244" height="274" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        
        {/* Receipt Header */}
        <rect width="244" height="44" rx="8" fill="#f8fafc" />
        <circle cx="28" cy="22" r="10" fill="#d1fae5" />
        <text x="24" y="26" fill="#059669" fontSize="11" fontWeight="900">✓</text>
        <text x="46" y="19" fill="#0f172a" fontSize="11" fontWeight="800">QUITTANCE DE PAIEMENT</text>
        <text x="46" y="32" fill="#64748b" fontSize="8.5">Réf : REC-2024-CUY-09418</text>

        <line x1="16" y1="52" x2="228" y2="52" stroke="#e2e8f0" strokeDasharray="3 3" />

        {/* Receipt Breakdown */}
        <g transform="translate(18, 64)" fontSize="9" fill="#475569">
          <text y="10">Contribuable :</text>
          <text x="120" y="10" fill="#0f172a" fontWeight="600">SARL CAMTECH</text>

          <text y="30">Date d’opération :</text>
          <text x="120" y="30" fill="#0f172a">04/10/2024 · 14:22</text>

          <text y="50">Impôt déclaré :</text>
          <text x="120" y="50" fill="#0f172a">TVA Réel T3</text>

          <text y="70">Base imposable :</text>
          <text x="120" y="70" fill="#0f172a">1 450 000 FCFA</text>

          <text y="90">Taux appliqué :</text>
          <text x="120" y="90" fill="#059669" fontWeight="600">19.25 %</text>
        </g>

        <line x1="16" y1="172" x2="228" y2="172" stroke="#0f172a" strokeWidth="1" />

        {/* Total Amount */}
        <text x="18" y="192" fill="#0f172a" fontSize="10" fontWeight="700">MONTANT TOTAL RÉGLÉ :</text>
        <text x="18" y="214" fill="#059669" fontSize="16" fontWeight="900">279 125 FCFA</text>

        {/* Stamp */}
        <rect x="18" y="226" width="130" height="22" rx="4" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
        <text x="24" y="240" fill="#047857" fontSize="8.5" fontWeight="800">AUTHENTIFIÉ · TRÉSOR PUBLIC</text>
        <text x="160" y="240" fill="#64748b" fontSize="8">Reçu émis</text>
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────
   3. MEDIATHEQUE
   Bibliothèque numérique universitaire avec recherche & cartes PDF
   ────────────────────────────────────────── */
export function MediathequePreview() {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <rect width="600" height="340" rx="8" fill="#1e1035" />

      {/* Top Navbar */}
      <rect width="600" height="42" fill="#2d164d" />
      <text x="20" y="25" fill="#e9d5ff" fontSize="12" fontWeight="800">📚 MA BIBLIO · MÉDIATHÈQUE IAI</text>
      
      {/* Search Bar with live query */}
      <rect x="230" y="10" width="220" height="24" rx="12" fill="#1e1035" stroke="#6b21a8" strokeWidth="1" />
      <text x="246" y="24" fill="#d8b4fe" fontSize="9.5">🔍 Rechercher : Génie logiciel, SQL, Web...</text>

      {/* User Session */}
      <rect x="470" y="10" width="114" height="24" rx="4" fill="#7e22ce" />
      <text x="480" y="24" fill="#ffffff" fontSize="9.5" fontWeight="600">👤 Espace Étudiant</text>

      {/* Categories / Fil d'Ariane */}
      <g transform="translate(20, 54)">
        <rect width="52" height="20" rx="10" fill="#a855f7" />
        <text x="12" y="14" fill="#ffffff" fontSize="9" fontWeight="700">Tous (48)</text>

        <rect x="58" width="86" height="20" rx="10" fill="#2d164d" stroke="#6b21a8" strokeWidth="1" />
        <text x="66" y="14" fill="#e9d5ff" fontSize="9">Génie Logiciel (16)</text>

        <rect x="150" width="96" height="20" rx="10" fill="#2d164d" stroke="#6b21a8" strokeWidth="1" />
        <text x="158" y="14" fill="#e9d5ff" fontSize="9">Bases de Données (12)</text>

        <rect x="252" width="76" height="20" rx="10" fill="#2d164d" stroke="#6b21a8" strokeWidth="1" />
        <text x="260" y="14" fill="#e9d5ff" fontSize="9">Réseaux & Syst.</text>

        <rect x="334" width="76" height="20" rx="10" fill="#2d164d" stroke="#6b21a8" strokeWidth="1" />
        <text x="342" y="14" fill="#e9d5ff" fontSize="9">Algorithmique</text>
      </g>

      {/* Grid of Resource Cards (6 items) */}
      <g transform="translate(20, 86)">
        {/* Card 1 */}
        <g transform="translate(0, 0)">
          <rect width="176" height="110" rx="6" fill="#261245" stroke="#4c1d95" strokeWidth="1" />
          <rect x="10" y="10" width="30" height="22" rx="3" fill="#dc2626" />
          <text x="13" y="24" fill="#ffffff" fontSize="8" fontWeight="800">PDF</text>
          <text x="46" y="22" fill="#c084fc" fontSize="8.5" fontWeight="600">GÉNIE LOGICIEL</text>
          <text x="10" y="46" fill="#f8fafc" fontSize="10.5" fontWeight="700">Architecture_Web_React.pdf</text>
          <text x="10" y="62" fill="#d8b4fe" fontSize="8.5">Supports cours IAI · L3 Génie Logiciel</text>
          <text x="10" y="78" fill="#94a3b8" fontSize="8">Taille : 4.8 Mo · 86 pages</text>
          <rect x="10" y="86" width="156" height="16" rx="3" fill="#7e22ce" />
          <text x="48" y="97" fill="#ffffff" fontSize="8.5" fontWeight="700">Télécharger le cours ⬇</text>
        </g>

        {/* Card 2 */}
        <g transform="translate(192, 0)">
          <rect width="176" height="110" rx="6" fill="#261245" stroke="#4c1d95" strokeWidth="1" />
          <rect x="10" y="10" width="30" height="22" rx="3" fill="#0284c7" />
          <text x="13" y="24" fill="#ffffff" fontSize="8" fontWeight="800">SQL</text>
          <text x="46" y="22" fill="#38bdf8" fontSize="8.5" fontWeight="600">BASES DE DONNÉES</text>
          <text x="10" y="46" fill="#f8fafc" fontSize="10.5" fontWeight="700">Optimisation_MySQL_PDO.pdf</text>
          <text x="10" y="62" fill="#d8b4fe" fontSize="8.5">Indexation, requêtes & transactions</text>
          <text x="10" y="78" fill="#94a3b8" fontSize="8">Taille : 3.2 Mo · 64 pages</text>
          <rect x="10" y="86" width="156" height="16" rx="3" fill="#0284c7" />
          <text x="48" y="97" fill="#ffffff" fontSize="8.5" fontWeight="700">Télécharger le cours ⬇</text>
        </g>

        {/* Card 3 */}
        <g transform="translate(384, 0)">
          <rect width="176" height="110" rx="6" fill="#261245" stroke="#4c1d95" strokeWidth="1" />
          <rect x="10" y="10" width="30" height="22" rx="3" fill="#059669" />
          <text x="13" y="24" fill="#ffffff" fontSize="8" fontWeight="800">PHP</text>
          <text x="46" y="22" fill="#34d399" fontSize="8.5" fontWeight="600">DÉVELOPPEMENT WEB</text>
          <text x="10" y="46" fill="#f8fafc" fontSize="10.5" fontWeight="700">Backend_PHP_Securite.pdf</text>
          <text x="10" y="62" fill="#d8b4fe" fontSize="8.5">Sessions, PDO & prévention injections</text>
          <text x="10" y="78" fill="#94a3b8" fontSize="8">Taille : 2.5 Mo · 52 pages</text>
          <rect x="10" y="86" width="156" height="16" rx="3" fill="#059669" />
          <text x="48" y="97" fill="#ffffff" fontSize="8.5" fontWeight="700">Télécharger le cours ⬇</text>
        </g>

        {/* Card 4 */}
        <g transform="translate(0, 118)">
          <rect width="176" height="110" rx="6" fill="#261245" stroke="#4c1d95" strokeWidth="1" />
          <rect x="10" y="10" width="30" height="22" rx="3" fill="#f59e0b" />
          <text x="13" y="24" fill="#ffffff" fontSize="8" fontWeight="800">UML</text>
          <text x="46" y="22" fill="#fbbf24" fontSize="8.5" fontWeight="600">MODÉLISATION</text>
          <text x="10" y="46" fill="#f8fafc" fontSize="10.5" fontWeight="700">Conception_Diagrammes_UML.pdf</text>
          <text x="10" y="62" fill="#d8b4fe" fontSize="8.5">Cas d’utilisation, classes & séquences</text>
          <text x="10" y="78" fill="#94a3b8" fontSize="8">Taille : 5.1 Mo · 110 pages</text>
          <rect x="10" y="86" width="156" height="16" rx="3" fill="#7e22ce" />
          <text x="48" y="97" fill="#ffffff" fontSize="8.5" fontWeight="700">Télécharger le cours ⬇</text>
        </g>

        {/* Card 5 */}
        <g transform="translate(192, 118)">
          <rect width="176" height="110" rx="6" fill="#261245" stroke="#4c1d95" strokeWidth="1" />
          <rect x="10" y="10" width="30" height="22" rx="3" fill="#dc2626" />
          <text x="13" y="24" fill="#ffffff" fontSize="8" fontWeight="800">PDF</text>
          <text x="46" y="22" fill="#f87171" fontSize="8.5" fontWeight="600">RÉSEAUX</text>
          <text x="10" y="46" fill="#f8fafc" fontSize="10.5" fontWeight="700">Protocoles_TCP_IP_Routage.pdf</text>
          <text x="10" y="62" fill="#d8b4fe" fontSize="8.5">Sous-réseaux & modèle OSI</text>
          <text x="10" y="78" fill="#94a3b8" fontSize="8">Taille : 3.8 Mo · 74 pages</text>
          <rect x="10" y="86" width="156" height="16" rx="3" fill="#0284c7" />
          <text x="48" y="97" fill="#ffffff" fontSize="8.5" fontWeight="700">Télécharger le cours ⬇</text>
        </g>

        {/* Card 6 */}
        <g transform="translate(384, 118)">
          <rect width="176" height="110" rx="6" fill="#261245" stroke="#4c1d95" strokeWidth="1" />
          <rect x="10" y="10" width="30" height="22" rx="3" fill="#10b981" />
          <text x="13" y="24" fill="#ffffff" fontSize="8" fontWeight="800">TD</text>
          <text x="46" y="22" fill="#34d399" fontSize="8.5" fontWeight="600">EXERCICES CORRIGÉS</text>
          <text x="10" y="46" fill="#f8fafc" fontSize="10.5" fontWeight="700">Annales_Examens_IAI_2024.pdf</text>
          <text x="10" y="62" fill="#d8b4fe" fontSize="8.5">Sujets d’examens corrigés L1-L3</text>
          <text x="10" y="78" fill="#94a3b8" fontSize="8">Taille : 7.2 Mo · 140 pages</text>
          <rect x="10" y="86" width="156" height="16" rx="3" fill="#059669" />
          <text x="48" y="97" fill="#ffffff" fontSize="8.5" fontWeight="700">Télécharger le cours ⬇</text>
        </g>
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────
   4. TODO APP REACT
   Interface de productivité personnelle avec termes clés et filtres
   ────────────────────────────────────────── */
export function TodoAppPreview() {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <rect width="600" height="340" rx="8" fill="#18181b" />

      {/* Top Header */}
      <rect width="600" height="42" fill="#27272a" />
      <text x="24" y="25" fill="#f59e0b" fontSize="12" fontWeight="800">✅ TodoApp React · Gestionnaire Personnel</text>
      <rect x="420" y="10" width="160" height="22" rx="11" fill="#3f3f46" />
      <text x="432" y="24" fill="#fef3c7" fontSize="9.5" fontWeight="600">💾 Persistance LocalStorage</text>

      {/* Main Container */}
      <g transform="translate(36, 54)">
        {/* Input Bar */}
        <rect width="440" height="36" rx="6" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
        <text x="16" y="22" fill="#a1a1aa" fontSize="10.5">Ajouter une nouvelle tâche (ex: Intégrer API, réviser React)...</text>
        <rect x="448" width="80" height="36" rx="6" fill="#f59e0b" />
        <text x="466" y="22" fill="#18181b" fontSize="11" fontWeight="800">+ Ajouter</text>

        {/* Filters & Status Chips */}
        <g transform="translate(0, 48)">
          <rect width="64" height="22" rx="11" fill="#f59e0b" />
          <text x="12" y="15" fill="#18181b" fontSize="9.5" fontWeight="800">Toutes (4)</text>

          <rect x="72" width="76" height="22" rx="11" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
          <text x="82" y="15" fill="#d4d4d8" fontSize="9.5">En cours (2)</text>

          <rect x="156" width="84" height="22" rx="11" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
          <text x="166" y="15" fill="#d4d4d8" fontSize="9.5">Terminées (2)</text>

          <text x="360" y="15" fill="#a1a1aa" fontSize="9.5">Filtre : Priorité Haute / Moyenne</text>
        </g>

        {/* Task List (4 real items) */}
        {/* Task 1: Checked */}
        <g transform="translate(0, 82)">
          <rect width="528" height="42" rx="6" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
          <circle cx="22" cy="21" r="8" fill="#10b981" />
          <text x="19" y="24" fill="#ffffff" fontSize="9" fontWeight="900">✓</text>
          <text x="38" y="25" fill="#71717a" fontSize="11" textDecoration="line-through">Configurer architecture Vite & Tailwind CSS v4</text>
          <rect x="430" y="12" width="86" height="18" rx="3" fill="#065f46" />
          <text x="440" y="24" fill="#a7f3d0" fontSize="8.5" fontWeight="700">✓ TERMINÉ</text>
        </g>

        {/* Task 2: Active Urgent */}
        <g transform="translate(0, 132)">
          <rect width="528" height="42" rx="6" fill="#27272a" stroke="#f59e0b" strokeWidth="1.5" />
          <circle cx="22" cy="21" r="8" fill="#3f3f46" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="38" y="25" fill="#f4f4f5" fontSize="11" fontWeight="700">Implémenter la synchronisation avec LocalStorage</text>
          <rect x="360" y="12" width="75" height="18" rx="3" fill="#7f1d1d" />
          <text x="368" y="24" fill="#fca5a5" fontSize="8.5" fontWeight="700">HAUTE PRIORITÉ</text>
          <rect x="442" y="12" width="74" height="18" rx="3" fill="#854d0e" />
          <text x="450" y="24" fill="#fef08a" fontSize="8.5" fontWeight="700">EN COURS</text>
        </g>

        {/* Task 3: Active Medium */}
        <g transform="translate(0, 182)">
          <rect width="528" height="42" rx="6" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
          <circle cx="22" cy="21" r="8" fill="#3f3f46" stroke="#71717a" strokeWidth="1" />
          <text x="38" y="25" fill="#f4f4f5" fontSize="11" fontWeight="600">Ajouter la recherche dynamique par mots-clés</text>
          <rect x="375" y="12" width="60" height="18" rx="3" fill="#3f3f46" />
          <text x="383" y="24" fill="#cbd5e1" fontSize="8.5">MOYENNE</text>
          <rect x="442" y="12" width="74" height="18" rx="3" fill="#854d0e" />
          <text x="450" y="24" fill="#fef08a" fontSize="8.5" fontWeight="700">EN COURS</text>
        </g>

        {/* Task 4: Checked */}
        <g transform="translate(0, 232)">
          <rect width="528" height="42" rx="6" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
          <circle cx="22" cy="21" r="8" fill="#10b981" />
          <text x="19" y="24" fill="#ffffff" fontSize="9" fontWeight="900">✓</text>
          <text x="38" y="25" fill="#71717a" fontSize="11" textDecoration="line-through">Bascule du thème clair et sombre instantanée</text>
          <rect x="430" y="12" width="86" height="18" rx="3" fill="#065f46" />
          <text x="440" y="24" fill="#a7f3d0" fontSize="8.5" fontWeight="700">✓ TERMINÉ</text>
        </g>
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────
   5. MORNING JS
   IDE / Code Editor avec syntax highlighting et mini-projets JS réels
   ────────────────────────────────────────── */
export function MorningJsPreview() {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <rect width="600" height="340" rx="8" fill="#0f172a" />

      {/* Editor Window Bar */}
      <rect width="600" height="36" fill="#1e293b" />
      <circle cx="20" cy="18" r="5" fill="#ef4444" />
      <circle cx="36" cy="18" r="5" fill="#f59e0b" />
      <circle cx="52" cy="18" r="5" fill="#10b981" />

      {/* IDE Tabs */}
      <rect x="74" y="6" width="118" height="30" rx="4" fill="#0f172a" />
      <text x="88" y="23" fill="#f43f5e" fontSize="10" fontWeight="700">JS</text>
      <text x="106" y="23" fill="#f8fafc" fontSize="10" fontWeight="600">index.js</text>

      <rect x="196" y="6" width="112" height="30" rx="4" fill="#1e293b" />
      <text x="210" y="23" fill="#38bdf8" fontSize="10" fontWeight="600">weather-api.js</text>

      <rect x="312" y="6" width="105" height="30" rx="4" fill="#1e293b" />
      <text x="326" y="23" fill="#34d399" fontSize="10" fontWeight="600">crypto-board.js</text>

      {/* Code Area (Left side) */}
      <g transform="translate(16, 48)" style={{ fontFamily: '"DM Mono", monospace', fontSize: '9.5px' }}>
        {/* Line 1 */}
        <text x="0" y="16" fill="#475569">01</text>
        <text x="28" y="16" fill="#f43f5e">import</text>
        <text x="70" y="16" fill="#f8fafc">{"{ JavaScriptLab }"}</text>
        <text x="190" y="16" fill="#f43f5e">from</text>
        <text x="222" y="16" fill="#34d399">'./modules/core.js'</text>

        {/* Line 2 */}
        <text x="0" y="34" fill="#475569">02</text>
        <text x="28" y="34" fill="#64748b">// Fondamentaux : DOM, Événements, Async/Await & API</text>

        {/* Line 3 */}
        <text x="0" y="52" fill="#475569">03</text>
        <text x="28" y="52" fill="#38bdf8">const</text>
        <text x="64" y="52" fill="#fbbf24">morningLab</text>
        <text x="135" y="52" fill="#f8fafc">=</text>
        <text x="148" y="52" fill="#38bdf8">new</text>
        <text x="172" y="52" fill="#60a5fa">JavaScriptLab</text>
        <text x="250" y="52" fill="#f8fafc">({'{'}</text>

        {/* Line 4 */}
        <text x="0" y="70" fill="#475569">04</text>
        <text x="44" y="70" fill="#cbd5e1">level:</text>
        <text x="90" y="70" fill="#34d399">'Pratique quotidienne intensive'</text>
        <text x="300" y="70" fill="#f8fafc">,</text>

        {/* Line 5 */}
        <text x="0" y="88" fill="#475569">05</text>
        <text x="44" y="88" fill="#cbd5e1">projects:</text>
        <text x="105" y="88" fill="#f8fafc">['Weather', 'Crypto', 'Toasts', 'GitHub']</text>

        {/* Line 6 */}
        <text x="0" y="106" fill="#475569">06</text>
        <text x="28" y="106" fill="#f8fafc">{'}'});</text>

        {/* Line 7 */}
        <text x="0" y="124" fill="#475569">07</text>
        <text x="28" y="124" fill="#38bdf8">await</text>
        <text x="65" y="124" fill="#fbbf24">morningLab</text>
        <text x="135" y="124" fill="#f8fafc">.</text>
        <text x="142" y="124" fill="#60a5fa">runAllMiniApps</text>
        <text x="228" y="124" fill="#f8fafc">();</text>
      </g>

      {/* Mini App Preview Cards (Right side) */}
      <g transform="translate(372, 48)">
        {/* Widget 1: Weather App */}
        <g>
          <rect width="210" height="66" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <text x="12" y="18" fill="#f59e0b" fontSize="8" fontWeight="700">MINI-PROJET 01 · API MÉTÉO</text>
          <text x="12" y="38" fill="#f8fafc" fontSize="13" fontWeight="800">🌤️ Yaoundé, CM</text>
          <text x="12" y="54" fill="#38bdf8" fontSize="10">28°C · Ensoleillé · Humidité 64%</text>
          <rect x="156" y="14" width="44" height="18" rx="3" fill="#0284c7" />
          <text x="162" y="26" fill="#ffffff" fontSize="8" fontWeight="700">REST API</text>
        </g>

        {/* Widget 2: Toast Notification */}
        <g transform="translate(0, 74)">
          <rect width="210" height="52" rx="6" fill="#065f46" stroke="#059669" strokeWidth="1" />
          <text x="12" y="18" fill="#a7f3d0" fontSize="8" fontWeight="700">MINI-PROJET 02 · NOTIFICATIONS</text>
          <text x="12" y="36" fill="#ffffff" fontSize="10.5" fontWeight="700">✓ Tâche enregistrée avec succès</text>
          <text x="168" y="36" fill="#a7f3d0" fontSize="8">DOM Event</text>
        </g>

        {/* Widget 3: Crypto Tracker */}
        <g transform="translate(0, 134)">
          <rect width="210" height="64" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <text x="12" y="18" fill="#fbbf24" fontSize="8" fontWeight="700">MINI-PROJET 03 · CRYPTO BOARD</text>
          <text x="12" y="36" fill="#f8fafc" fontSize="11" fontWeight="700">Bitcoin (BTC) : $94 280</text>
          <text x="12" y="52" fill="#34d399" fontSize="9" fontWeight="700">▲ +5.2% · Fetch API Asynchrone</text>
        </g>
      </g>

      {/* Terminal Output at bottom */}
      <g transform="translate(16, 256)">
        <rect width="568" height="70" rx="5" fill="#030712" stroke="#1e293b" strokeWidth="1" />
        <text x="14" y="20" fill="#22c55e" fontSize="9" fontWeight="700" fontFamily="monospace">&gt; CONSOLE &amp; TESTS UNITAIRES</text>
        <text x="14" y="38" fill="#94a3b8" fontSize="9" fontFamily="monospace">✓ 12/12 mini-projets exécutés sans anomalie</text>
        <text x="14" y="54" fill="#38bdf8" fontSize="9" fontFamily="monospace">✓ Pratique régulière : DOM manipulation, LocalStorage, Fetch, Async/Await</text>
      </g>
    </svg>
  )
}

/* ──────────────────────────────────────────
   6. VINTAGE FORM
   Composant d'authentification ergonomique avec termes clés UX & A11y
   ────────────────────────────────────────── */
export function VintageFormPreview() {
  return (
    <svg viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <rect width="600" height="340" rx="8" fill="#0e3a47" />

      {/* Decorative concentric circles */}
      <circle cx="80" cy="80" r="160" stroke="#0891b2" strokeWidth="1" opacity="0.15" />
      <circle cx="520" cy="260" r="180" stroke="#0891b2" strokeWidth="1" opacity="0.15" />

      {/* Top Banner */}
      <rect width="600" height="34" fill="#082f3d" />
      <text x="24" y="22" fill="#67e8f9" fontSize="11" fontWeight="800">VINTAGE FORM · DÉMO D’AUTHENTIFICATION ACCESSIBLE</text>
      <text x="430" y="22" fill="#a5f3fc" fontSize="9.5">Conforme A11y &amp; Validation HTML5</text>

      {/* Centered Form Card */}
      <g transform="translate(130, 48)">
        <rect width="340" height="276" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
        
        {/* Card Header */}
        <text x="24" y="28" fill="#0f172a" fontSize="13" fontWeight="800">Espace Membre · Connexion</text>
        <text x="24" y="44" fill="#64748b" fontSize="9">Bascule dynamique vers Inscription en 1 clic</text>

        {/* Tab Switcher */}
        <g transform="translate(24, 54)">
          <rect width="292" height="30" rx="15" fill="#f1f5f9" />
          <rect width="146" height="30" rx="15" fill="#0891b2" />
          <text x="48" y="19" fill="#ffffff" fontSize="10" fontWeight="700">Se connecter</text>
          <text x="194" y="19" fill="#64748b" fontSize="10" fontWeight="600">S’inscrire</text>
        </g>

        {/* Field 1: Email */}
        <g transform="translate(24, 98)">
          <text y="10" fill="#334155" fontSize="9.5" fontWeight="600">Adresse e-mail professionnelle :</text>
          <rect y="16" width="292" height="32" rx="5" fill="#ffffff" stroke="#0891b2" strokeWidth="1.5" />
          <text x="12" y="36" fill="#0f172a" fontSize="11">narcisse.eloumou@example.com</text>
          <text x="264" y="36" fill="#10b981" fontSize="11" fontWeight="900">✓</text>
        </g>

        {/* Field 2: Password */}
        <g transform="translate(24, 154)">
          <text y="10" fill="#334155" fontSize="9.5" fontWeight="600">Mot de passe sécurisé :</text>
          <rect y="16" width="292" height="32" rx="5" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
          <text x="12" y="38" fill="#0f172a" fontSize="13" letterSpacing="2">••••••••••••••••</text>
          <text x="248" y="36" fill="#0891b2" fontSize="9" fontWeight="600">Afficher</text>
        </g>

        {/* Options: Remember me & Forgot */}
        <g transform="translate(24, 214)">
          <rect width="12" height="12" rx="2" fill="#0891b2" />
          <text x="3" y="10" fill="#ffffff" fontSize="9" fontWeight="900">✓</text>
          <text x="20" y="10" fill="#475569" fontSize="9">Mémoriser</text>
          <text x="180" y="10" fill="#0891b2" fontSize="9" fontWeight="600">Mot de passe oublié ?</text>
        </g>

        {/* Submit CTA */}
        <rect x="24" y="230" width="292" height="34" rx="6" fill="#0891b2" />
        <text x="108" y="251" fill="#ffffff" fontSize="11" fontWeight="800">Accéder à mon compte →</text>
      </g>
    </svg>
  )
}
