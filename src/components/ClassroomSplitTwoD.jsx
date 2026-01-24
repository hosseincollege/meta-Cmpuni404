import React, {
    useState,
    useMemo,
    useCallback,
    useRef,
} from "react";

const styles = {
    mainContainer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#080808",
        display: "flex",
        flexDirection: "column",
        color: "white",
        direction: "rtl",
        fontFamily: "sans-serif",
        position: "relative", // برای قرارگیری صحیح نوار ابزار
    },
    // --- استایل‌های نوار ابزار (مشابه LessonRoom) ---
    topToolbar: {
        position: "absolute",
        top: 4,
        right: 6,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(20,20,20,0.85)", // کمی تیره‌تر برای خوانایی روی متن
        backdropFilter: "blur(8px)",
        borderRadius: "8px",
        padding: "6px 10px",
        border: "1px solid rgba(255,255,255,0.12)",
        color: "white",
    },
    iconButtonStyle: (isActive, color = "white") => ({
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: isActive ? color : "#64748b",
        padding: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "color 0.2s ease",
    }),
    // --- استایل‌های اصلی صفحه ---
    headerSpacer: {
        height: "60px", // فضای خالی برای اینکه نوار ابزار روی هدر اصلی نیفتد
        width: "100%",
    },
    topBar: {
        display: "flex",
        alignItems: "center",
        padding: "10px 16px",
        backgroundColor: "#171717",
        boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
        borderBottom: "1px solid #333",
    },
    backButton: {
        background: "#3b82f6",
        color: "white",
        border: "none",
        padding: "8px 14px",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold",
    },
    threeColumnSplit: {
        display: "flex",
        flex: 1,
        overflow: "hidden",
    },
    chapterNavPanel: {
        width: "280px",
        minWidth: "280px",
        backgroundColor: "#0f0f0f",
        padding: "12px 10px",
        overflowY: "auto",
        borderLeft: "1px solid #262626",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
    },
    topicListPanel: {
        width: "260px",
        minWidth: "260px",
        backgroundColor: "#131313",
        padding: "12px 10px",
        overflowY: "auto",
        borderLeft: "1px solid #262626",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    contentPanelArea: {
        flex: 1,
        padding: "14px 18px",
        overflowY: "auto",
    },
    chapterButtonVertical: {
        padding: "8px 10px",
        borderRight: "3px solid",
        background: "transparent",
        color: "#9ca3af",
        cursor: "pointer",
        transition: "0.2s",
        whiteSpace: "nowrap",
        textAlign: "right",
        width: "100%",
        marginBottom: "6px",
        lineHeight: "1.7",
        fontSize: "1.05rem",
    },
    topicList: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
    },
    topicHeader: {
        fontSize: "1.3rem",
        margin: "0 0 10px 0",
        paddingBottom: "6px",
        borderBottom: "2px solid #334155",
    },
    topicItem: {
        padding: "8px 10px",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "0.2s",
        lineHeight: "1.8",
        fontSize: "1.05rem",
    },
    topicTitle: {
        fontSize: "1.05rem",
        display: "block",
        margin: 0,
        padding: 0,
    },
    contentHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "10px",
        marginBottom: "14px",
        borderBottom: "1px dashed #334155",
    },
    subtopicsContainer: {
        marginTop: "18px",
        padding: "12px",
        backgroundColor: "#1e1e1e",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
    },
    subtopicDetailItem: {
        padding: "10px 12px",
        borderRight: "3px solid #374151",
        backgroundColor: "#171717",
        borderRadius: "8px",
    },
    subtopicTitleStyle: {
        margin: "0 0 8px 0",
        paddingBottom: "6px",
        borderBottom: "1px dashed #3f3f46",
        fontSize: "1.15rem",
        fontWeight: "bold",
        color: "#d1d5db",
        lineHeight: "1.6",
    },
};

export default function ClassroomSplitTwoD({ lesson, onBack, onSwitchTo3D }) {
    if (!lesson || !lesson.chapters || lesson.chapters.length === 0) {
        return (
            <div style={{ backgroundColor: "#080808", color: "white" }}>
                محتوای درس یافت نشد.
            </div>
        );
    }

    const chapters = lesson.chapters;
    const chapterColor = lesson.color || "#38bdf8";
    const secondaryColor = "#f59e0b";
    const topicListRef = useRef(null);
    
    const [activeChapterId, setActiveChapterId] = useState(chapters[0].id);
    const [activeTopic, setActiveTopic] = useState(chapters[0].topics[0]);

    const detectDir = useCallback((text) => {
        const persianRegex = /[\u0600-\u06FF]/;
        return persianRegex.test(text) ? "rtl" : "ltr";
    }, []);

    const activeChapter = useMemo(
        () => chapters.find((ch) => ch.id === activeChapterId),
        [activeChapterId, chapters]
    );

    const handleChapterChange = (id) => {
        const ch = chapters.find((c) => c.id === id);
        setActiveChapterId(id);
        setActiveTopic(ch?.topics?.[0] || null);
        topicListRef.current?.scrollTo(0, 0);
    };

    return (
        <div style={styles.mainContainer}>
            
            {/* --- نوار ابزار شناور (مشابه LessonRoom) --- */}
            <div style={styles.topToolbar}>

                {/* دکمه: رفتن به صفحه 3D */}
                <button
                    onClick={onSwitchTo3D}
                    title="نمای سه بعدی (فضایی)"
                    style={styles.iconButtonStyle(true, "#38bdf8")}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3l10 6v6l-10 6-10-6V9z"></path>
                        <path d="M22 9l-10 6-10-6"></path>
                    </svg>
                </button>

                {/* جداکننده عمودی */}
                <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />

                {/* عنوان درس */}
                <h3
                    style={{
                        margin: "0 4px",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                        color: "#e2e8f0",
                        whiteSpace: "nowrap",
                        padding: 0,
                    }}
                >
                    {lesson.title}
                </h3>

                {/* جداکننده عمودی */}
                <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.2)", margin: "0 4px" }} />

                {/* آیکون‌های انتخاب حالت (فقط نمایشی در 2D) */}
                <div style={{ display: "flex", gap: "4px", marginLeft: "auto" }}>

                    {/* دکمه: خروج */}
                    <button
                        onClick={onBack}
                        title="خروج"
                        style={styles.iconButtonStyle(true, "#f87171")}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                    </button>

                </div>
            </div>

            {/* فضای خالی برای جلوگیری از همپوشانی */}
            <div style={styles.headerSpacer}></div>


            {/* محتوای سه ستونه */}
            <div style={styles.threeColumnSplit}>
                {/* فصل‌ها */}
                <div style={styles.chapterNavPanel}>
                    <h2
                        style={{
                            ...styles.topicHeader,
                            color: chapterColor,
                            borderBottom: `2px solid ${chapterColor}`,
                        }}
                    >
                        فصل‌ها
                    </h2>
                    {chapters.map((ch) => (
                        <button
                            key={ch.id}
                            style={{
                                ...styles.chapterButtonVertical,
                                borderColor:
                                    activeChapterId === ch.id
                                        ? chapterColor
                                        : "#374151",
                                backgroundColor:
                                    activeChapterId === ch.id
                                        ? "rgba(55,65,81,0.6)"
                                        : "transparent",
                                color:
                                    activeChapterId === ch.id
                                        ? "white"
                                        : "#9ca3af",
                            }}
                            onClick={() => handleChapterChange(ch.id)}
                            title={ch.title}
                        >
                            {ch.title.length > 30
                                ? ch.title.substring(0, 30) + "..."
                                : ch.title}
                        </button>
                    ))}
                </div>

                {/* تاپیک‌ها */}
                <div style={styles.topicListPanel} ref={topicListRef}>
                    <h2
                        style={{
                            ...styles.topicHeader,
                            color: chapterColor,
                        }}
                    >
                        {activeChapter.title}
                    </h2>
                    <div style={styles.topicList}>
                        {activeChapter.topics.map((t) => (
                            <div
                                key={t.id}
                                style={{
                                    ...styles.topicItem,
                                    backgroundColor:
                                        activeTopic?.id === t.id
                                            ? "rgba(55,65,81,0.4)"
                                            : "transparent",
                                    borderRight:
                                        activeTopic?.id === t.id
                                            ? `3px solid ${chapterColor}`
                                            : "none",
                                }}
                                onClick={() => setActiveTopic(t)}
                            >
                                <span style={styles.topicTitle}>
                                    {t.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* محتوا */}
                <div
                    style={{
                        ...styles.contentPanelArea,
                        direction: detectDir(
                            activeTopic?.content || activeTopic?.title || ""
                        ),
                    }}
                >
                    {activeTopic && (
                        <>
                            <div style={styles.contentHeader}>
                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: "1.35rem",
                                        color: chapterColor,
                                        lineHeight: "1.7",
                                    }}
                                >
                                    {activeTopic.title}
                                </h3>
                            </div>
                            <p
                                style={{
                                    margin: "0 0 16px 0",
                                    fontSize: "1.2rem",
                                    lineHeight: "1.9",
                                    color: "#e5e7eb",
                                }}
                            >
                                {activeTopic.content}
                            </p>
                            {activeTopic.subtopics?.length > 0 && (
                                <div style={styles.subtopicsContainer}>
                                    {activeTopic.subtopics.map((sub, i) => (
                                        <div
                                            key={i}
                                            style={styles.subtopicDetailItem}
                                        >
                                            <h5
                                                style={{
                                                    ...styles.subtopicTitleStyle,
                                                    color: secondaryColor,
                                                }}
                                            >
                                                {i + 1}. {sub.title}
                                            </h5>
                                            <p
                                                style={{
                                                    margin: 0,
                                                    fontSize: "1.1rem",
                                                    lineHeight: "1.85",
                                                    color: "#cbd5e1",
                                                }}
                                            >
                                                {sub.content}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}