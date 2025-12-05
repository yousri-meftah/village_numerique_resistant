You are Axolotl AI generating structured JSON for the Nexus Dynamic Form Engine.

Your job is to analyze the user's request and produce ONLY valid JSON fully matching this schema:

{
  "intent": "contact" | "donation" | "volunteering" | "information_request" | "other",
  "summary": "short description of what you understood",
  "extracted_data": { "key": "value" },
  "fields": [
    {
      "label": str,
      "id": str,
      "type": "text" | "email" | "number" | "textarea" | "select" | "date",
      "required": bool,
      "options": [str]?
    }
  ],
  "pdf": {
    "title": str,
    "content": [
      { "type": "header" | "text" | "form_fields", "value": str or array }
    ]
  },
  "thank_you_page": {
    "title": str,
    "message": str,
    "year": number,
    "mission": str
    },
  "frontend_code": {
    "react": str,
    "angular": str
  },
  "architecture": {
    "workflow": [str, ...]
  }
}

STRICT RULES:
1. Output ONLY valid JSON, no markdown, no commentary.
2. ALWAYS include at least: name, email, submission_date.
3. Proactively expand the form with additional relevant fields, even if the user did not mention them.
4. Add optional fields, hidden system fields, tracking fields, or helper fields that would realistically improve a professional form workflow (e.g., request_id, browser_fingerprint, tags, priority, category, etc.).
5. For select fields, always provide meaningful# 🌱 Village Numérique Résistant – Interface Innovante & Immersive

## 🎯 Description du projet

Le **Village Numérique Résistant** est une interface web immersive et innovante conçue pour réinventer l’expérience utilisateur autour du thème NIRD (Numérique Inclusif, Responsable et Durable).  
Plutôt qu’un site classique avec des menus et des pages statiques, l’utilisateur explore un **village interactif** où chaque bâtiment représente une thématique clé du numérique résistant.

L’objectif est d'apprendre en explorant.  
L’utilisateur – élève, enseignant, parent ou membre d’une collectivité – navigue en **cliquant, glissant ou survolant** le village pour dévoiler :

- du contenu pédagogique contextualisé  
- des informations illustrant les solutions pour réduire la dépendance aux Big Tech  

L’ergonomie casse volontairement les standards : **pas de menus classiques**, mais une navigation fluide, intuitive et dynamique avec animations, micro-interactions et feedback instantané.  
Chaque choix d’interaction est réfléchi pour :

- résoudre un problème utilisateur  
- encourager l’exploration active  
- rendre la compréhension des enjeux NIRD intuitive et engageante  
- offrir une expérience ludique, motivante et mémorable  

Le style graphique s’inspire d’un **village créatif, humoristique et résilient**, symbolisant l’ingéniosité et la résistance numérique.  
L’interface est totalement **responsive**, accessible, et pensée pour mobile, tablette et desktop.

Ce projet vise à transmettre l’esprit NIRD de manière **pédagogique**, **immersive** , **inspirante** et ** ergonomique**, tout en donnant envie d’agir pour un numérique plus responsable et durable.

---

## 🧱 Technologies utilisées

- React + Vite  
- TypeScript  
- Framer Motion (animations)  
- TailwindCSS (si utilisé)  
- Lucide Icons  

---

## 📦 Installation & Lancement

### 1️⃣ Cloner le dépôt
git clone https://github.com/ton-utilisateur/village-numerique-resistant.git
  ###2️⃣ Ouvrir le dossier du projet  
cd village-numerique-resistant
### 3️⃣ Installer les dépendances
npm i
### 4️⃣ Démarrer le serveur local
npm run dev

---

## ✨ Fonctionnalités principales

- 🏘 **Village interactif** permettant l’exploration via *hover*, *drag* et *click*
- 🧩 **Mini-jeux, défis et quiz intégrés** pour un apprentissage ludique
- 📚 **Contenus pédagogiques NIRD** accessibles directement dans l’interface
- 🔄 **Animations fluides** grâce à Framer Motion pour une expérience immersive
- 📱 **Interface responsive et accessible**, adaptée à tous les appareils
- 🎨 **Style créatif et humoristique**, renforçant l’univers du Village Numérique Résistant

---


## 🚀 Objectifs pédagogiques

- Sensibiliser au numérique responsable  
- Encourager l’autonomie numérique  
- Promouvoir les alternatives éthiques et locales  
- Rendre l’apprentissage ludique, fluide et immersif  

---