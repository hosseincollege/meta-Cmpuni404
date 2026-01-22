import React, { useState, useMemo, useCallback } from "react";
import LessonRoom from "./components/LessonRoom";
import ClassroomSplitTwoD from "./components/ClassroomSplitTwoD";

// --- وارد کردن دروس ---
import python from "./lessons/python";
import networks from "./lessons/networks";
import algorithms from "./lessons/algorithms";
import iot from "./lessons/iot";
import cloud from "./lessons/cloud";
import circuits from "./lessons/circuits";
import jame from "./lessons/jame";
import pytuni from "./lessons/pytuni";
import netuni from "./lessons/netuni";
import alguni from "./lessons/alguni";
import iotuni from "./lessons/iotuni";
import clouni from "./lessons/clouni";
import ciruni from "./lessons/ciruni";
import pytam from "./lessons/pytam";

// --- تابع نرمال‌سازی (از فایل‌های شما) ---
function normalizeLesson(raw, name) {
  if (Array.isArray(raw)) {
    return {
      title: name,
      color:
        name === "Python" ? "#306998" :
        name === "Networks" ? "#ff8844" :
        name === "Algorithms" ? "#00cc66" :
        name === "IoT" ? "#aa44ff" :
        name === "Cloud" ? "#00aaff" :
        name === "circuits" ? "#ffcc00" :
        name === "jame" ? "#ff6b6b" :
        name === "pytuni" ? "#1574da" :
        name === "netuni" ? "#ff6a00" :
        name === "alguni" ? "#00b34d" :
        name === "iotuni" ? "#8a22e6" :
        name === "clouni" ? "#0088dd" :
        name === "ciruni" ? "#e6b800" :
        name === "pytam" ? "#0961c0" :
        "#ffffff",

      chapters: raw.map((c, i) => ({
        id: "ch" + i,
        title: c.section || "Untitled",
        topics: (c.topics || []).map((t, j) => ({
          id: `t_${i}_${j}`,
          title: t.title,
          content: t.content,
          subtopics: t.subtopics || [],
        })),
      })),
    };
  }
  return raw;
}

const LESSONS_DATA = {
  python: normalizeLesson(python, "Python"),
  networks: normalizeLesson(networks, "Networks"),
  algorithms: normalizeLesson(algorithms, "Algorithms"),
  iot: normalizeLesson(iot, "IoT"),
  cloud: normalizeLesson(cloud, "Cloud"),
  circuits: normalizeLesson(circuits, "circuits"),
  jame: normalizeLesson(jame, "jame"),
  pytuni: normalizeLesson(pytuni, "pytuni"),
  netuni: normalizeLesson(netuni, "netuni"),
  alguni: normalizeLesson(alguni, "alguni"),
  iotuni: normalizeLesson(iotuni, "iotuni"),
  clouni: normalizeLesson(clouni, "clouni"),
  ciruni: normalizeLesson(ciruni, "ciruni"),
  pytam: normalizeLesson(pytam, "pytam"),
};

// --- استایل‌ها (ترکیب شده از فایل‌های قبلی) ---
function getStyles() {
    return {
        container: {
            width: "100vw",
            height: "100vh",
            backgroundColor: "#0f172a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            color: "white",
            direction: "rtl",
            fontFamily: "sans-serif",
            overflow: "hidden",
        },
        header: {
            fontSize: "2.2rem",
            marginBottom: "6px",
            background: "linear-gradient(to right, #4eaaff, #a355ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
        },
        subHeader: {
            fontSize: "1rem",
            marginBottom: "12px",
            color: "#b6c0d1",
        },
        scrollArea: {
            width: "100%",
            height: "calc(100vh - 120px)",
            overflowY: "auto",
            overflowX: "hidden",
            padding: "0 20px 40px 20px",
            boxSizing: "border-box",
        },
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "22px",
            justifyItems: "center",
            alignItems: "center",
        },
        card: {
            width: "140px",
            height: "160px",
            background: "rgba(30, 41, 59, 0.9)",
            borderRadius: "14px",
            border: "2px solid #334155",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "0.25s",
        },
        icon: {
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
        },
        cardTitle: {
            marginTop: "10px",
            fontSize: "0.95rem",
        },
        // استایل‌های اضافه شده برای دکمه 2D در صفحه اصلی
        optionsContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
        },
        twoDButton: {
            background: '#3b82f6', // آبی برای متمایز کردن
            color: 'white',
            border: 'none',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            cursor: 'pointer',
            marginTop: '5px',
            fontWeight: 'bold',
        }
    }
}


// --- کامپوننت رندر کننده کارت درس ---
const LessonCard = ({ lesson, onSelect3D, onSelect2D }) => {
    const styles = getStyles();

    return (
        <div
            style={{ ...styles.card, borderColor: lesson.color }}
            // 1. کلیک روی کارت پیش‌فرض 3D را فعال می‌کند
            onClick={() => onSelect3D(lesson)}
        >
            <div style={{ ...styles.icon, backgroundColor: lesson.color }}>
                {lesson.title.substring(0, 2).toUpperCase()}
            </div>
            <h3 style={styles.cardTitle}>{lesson.title}</h3>
            
            {/* 2. دکمه کوچک 2D در پایین کارت */}
            <button
                style={styles.twoDButton}
                onClick={(e) => {
                    e.stopPropagation(); // جلوگیری از فعال شدن onClick اصلی کارت (3D)
                    onSelect2D(lesson);
                }}
            >
                2D
            </button>
        </div>
    );
}


export default function App() {
  const [activeLesson, setActiveLesson] = useState(null);
  const [viewMode, setViewMode] = useState(null); // '3D' یا '2D'

  // --- توابع دسترسی ---
  const handleSelectLesson = useCallback((lesson) => {
    setActiveLesson(lesson);
    setViewMode(null); // ریست کردن حالت نما
  }, []);

  const handleBack = useCallback(() => {
    setActiveLesson(null);
    setViewMode(null);
  }, []);

  // --- مدیریت مسیرها ---

  // مسیر 3D: انتخاب مستقیم از کارت (پیش‌فرض)
  const handleSelect3D = useCallback((lesson) => {
    setActiveLesson(lesson);
    setViewMode('3D');
  }, []);

  // مسیر 2D: انتخاب از دکمه کوچک کنار کارت
  const handleSelect2D = useCallback((lesson) => {
    setActiveLesson(lesson);
    setViewMode('2D');
  }, []);


  if (activeLesson && viewMode === '3D') {
    return <LessonRoom lesson={activeLesson} onBack={handleBack} />;
  }

  if (activeLesson && viewMode === '2D') {
    return <ClassroomSplitTwoD lesson={activeLesson} onBack={handleBack} />;
  }

  // صفحه اصلی: لیست دروس
  return (
    <div style={getStyles().container}>
      <h1 style={getStyles().header}>دانشگاه متاورس</h1>
      <p style={getStyles().subHeader}>روی کارت کلیک کنید (پیش‌فرض 3D) یا دکمه 2D را بزنید.</p>
      <div style={getStyles().scrollArea}>
        <div style={getStyles().grid}>
          {Object.keys(LESSONS_DATA).map((key) => {
            const lesson = LESSONS_DATA[key];
            return (
              <LessonCard
                key={key}
                lesson={lesson}
                onSelect3D={handleSelect3D}
                onSelect2D={handleSelect2D}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
