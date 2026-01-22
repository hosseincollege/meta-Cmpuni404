import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";

const styles = {
    mainContainer: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#080808",
        display: "flex",
        flexDirection: "column",
        color: "white",
        direction: "rtl", // حفظ جهت RTL
        fontFamily: "sans-serif",
    },
    topBar: {
        display: "flex",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#171717",
        boxShadow: "0 2px 4px rgba(0,0,0,0.4)",
    },
    backButton: {
        background: '#3b82f6',
        color: 'white',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '6px',
        cursor: 'pointer',
        fontWeight: 'bold',
    },

    // --- تغییرات اصلی در ساختار و استایل ---
    threeColumnSplit: {
        display: "flex",
        flex: 1,
        overflow: 'hidden',
    },
    // پنل 1: نوار ناوبری فصل‌ها (جدید) - در سمت راست
    chapterNavPanel: {
        width: '250px', // عرض نوار فصل‌ها
        minWidth: '250px',
        backgroundColor: '#0f0f0f',
        padding: '15px',
        overflowY: 'auto',
        borderLeft: '1px solid #262626',
        display: 'flex',
        flexDirection: 'column',
    },
    // پنل 2: لیست تاپیک‌ها (قبلاً در rightPanel بود) - در وسط
    topicListPanel: {
        width: '250px', // عرض لیست تاپیک‌ها
        minWidth: '250px',
        backgroundColor: '#131313',
        padding: '15px',
        overflowY: 'auto',
        borderLeft: '1px solid #262626',
        display: 'flex',
        flexDirection: 'column',
    },
    // پنل 3: محتوا (قبلاً leftPanel بود) - در سمت چپ
    contentPanelArea: {
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
    },
    // استایل‌های مرتبط با ناوبری عمودی فصل‌ها
    chapterButtonVertical: {
        padding: '10px 12px',
        borderRight: '3px solid', // خط راست برای فعال بودن
        background: 'transparent',
        color: '#9ca3af',
        cursor: 'pointer',
        transition: '0.2s',
        whiteSpace: 'nowrap',
        textAlign: 'right',
        width: '100%',
        marginBottom: '5px',
    },
    // بقیه استایل‌ها مشابه قبل (topicList, topicHeader, contentHeader, و غیره)
    topicList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    topicHeader: {
        fontSize: '1.3rem',
        marginBottom: '10px',
        paddingBottom: '5px',
        borderBottom: '2px solid #334155',
    },
    topicItem: {
        padding: '8px',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: '0.2s',
    },
    topicTitle: {
        fontSize: '0.95rem',
        display: 'block',
        padding: '2px 0'
    },
    contentHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '10px',
        marginBottom: '15px',
        borderBottom: '1px dashed #334155',
    },
    closeButton: {
        background: 'none',
        border: 'none',
        color: '#94a3b8',
        fontSize: '1.5rem',
        cursor: 'pointer',
    },
    contentPlaceholder: {
        padding: '40px',
        textAlign: 'center',
        color: '#94a3b8',
    },
    subtopicsContainer: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#1e1e1e',
        borderRadius: '8px',
    },
    subtopicItem: {
        marginBottom: '10px',
        borderRight: '3px solid #374151',
        paddingRight: '10px',
    },
    subtopicDetailItem: {
        marginBottom: '25px',
        paddingRight: '15px',
        borderRight: '4px solid #374151', // جدا کننده قوی تر
        backgroundColor: '#171717', // پس زمینه کمی تیره تر برای تاکید
        padding: '15px',
        borderRadius: '8px',
    },
    subtopicTitleStyle: {
        color: '#d1d5db',
        borderBottom: '1px dashed #3f3f46',
        paddingBottom: '5px',
        marginBottom: '10px',
        fontSize: '1.1rem'
    }
};

export default function ClassroomSplitTwoD({ lesson, onBack }) {
  if (!lesson || !lesson.chapters || lesson.chapters.length === 0) {
    return <div style={{...styles.fallback, backgroundColor: styles.mainContainer.backgroundColor, color: 'white'}}>محتوای درس یافت نشد.</div>;
  }

  const chapters = lesson.chapters;
  const chapterColor = lesson.color || "#38bdf8";
  const secondaryColor = "#f59e0b";

  const topicListRef = useRef(null);
  const chapterRefs = useRef({});
  
  const initialChapterId = chapters[0]?.id || null;
  const initialTopic = chapters[0]?.topics[0] || null;

  const [activeChapterId, setActiveChapterId] = useState(initialChapterId);
  const [activeTopic, setActiveTopic] = useState(initialTopic);

  useEffect(() => {
    if (initialChapterId && chapters.length > 0 && initialTopic) {
        setActiveChapterId(initialChapterId);
        setActiveTopic(initialTopic);
    }
  }, [initialChapterId, initialTopic, chapters]);

  const detectDir = useCallback((text) => {
    const persianRegex = /[\u0600-\u06FF\uFB50-\uFDFF\uFE70-\uFFFD]/;
    return persianRegex.test(text) ? "rtl" : "ltr";
  }, []);

  const activeChapter = useMemo(() => {
    return chapters.find((ch) => ch.id === activeChapterId);
  }, [activeChapterId, chapters]);

  const handleTopicClick = useCallback((topicData) => {
    setActiveTopic(topicData);
    if (topicListRef.current) {
        topicListRef.current.scrollTop = 0;
    }
  }, []);

  const handleChapterChange = useCallback((chapterId, shouldScrollToList = false) => {
    const newActiveChapter = chapters.find((ch) => ch.id === chapterId);
    if (newActiveChapter) {
        setActiveChapterId(chapterId);

        const firstTopic = newActiveChapter.topics[0];
        if (firstTopic) {
            setActiveTopic(firstTopic);
        } else {
            setActiveTopic(null);
        }

        if (shouldScrollToList && topicListRef.current) {
            topicListRef.current.scrollTop = 0;
        }
    }
  }, [chapters]);

  // --- 1. رندر نوار عمودی فصل‌ها (در پنل سمت راست) ---
  const renderVerticalChapterNav = () => (
    <div style={styles.chapterNavPanel}> {/* استفاده از استایل جدید برای پنل نوار فصل‌ها */}
      <h2 style={{ ...styles.topicHeader, color: chapterColor, borderBottom: `2px solid ${chapterColor}` }}>
            فصل‌ها
      </h2>
      {chapters.map((ch) => (
        <button
          key={ch.id}
          ref={el => (chapterRefs.current[ch.id] = el)}
          style={{
            ...styles.chapterButtonVertical, // استفاده از استایل عمودی
            borderColor: activeChapterId === ch.id ? chapterColor : '#374151',
            backgroundColor: activeChapterId === ch.id ? 'rgba(55, 65, 81, 0.7)' : 'transparent',
            color: activeChapterId === ch.id ? 'white' : '#9ca3af',
          }}
          onClick={() => handleChapterChange(ch.id, true)}
        >
          {ch.title.length > 30 ? ch.title.substring(0, 30) + '...' : ch.title}
        </button>
      ))}
    </div>
  );

  // --- 2. رندر لیست تاپیک‌ها (در پنل میانی) ---
  const renderTopicList = () => {
    if (!activeChapter || !activeChapter.topics) return <div style={styles.topicPlaceholder}>فصلی انتخاب نشده یا تاپیکی ندارد.</div>;

    return (
      <div style={styles.topicList} ref={topicListRef}>
        
        {/* عنوان فصل فعال */}
        <h2 style={{ ...styles.topicHeader, color: chapterColor, marginTop: '0px' }}>
            {activeChapter.title}
        </h2>

        {/* لیست تاپیک‌ها */}
        {activeChapter.topics.map((t, index) => (
          <div
            key={t.id}
            style={{
                ...styles.topicItem,
                direction: detectDir(t.title),
                backgroundColor: activeTopic?.id === t.id ? 'rgba(55, 65, 81, 0.4)' : 'transparent',
                borderRight: activeTopic?.id === t.id ? `3px solid ${chapterColor}` : 'none'
            }}
            onClick={() => handleTopicClick(t)}
          >
            <span style={{...styles.topicTitle, color: activeTopic?.id === t.id ? chapterColor : '#cbd5e1'}}>
                {index + 1}. {t.title}
            </span>
          </div>
        ))}
      </div>
    );
  };


  // --- 3. رندر محتوای تاپیک (در پنل سمت چپ) ---
  const renderContentArea = () => {
      if (!activeTopic) {
        return (
          <div style={styles.contentPlaceholder}>
            لطفاً یک تاپیک را از ستون وسط انتخاب کنید تا محتوا نمایش داده شود.
          </div>
        );
      }

      return (
          <div style={{ ...styles.contentPanelArea, direction: detectDir(activeTopic.content || activeTopic.title) }}>
              <div style={styles.contentHeader}>
                  <h3 style={{ color: chapterColor }}>{activeTopic.title}</h3>
                  {/* دکمه بستن محتوا معمولا در نمای 3 ستونه منطقی نیست، اما اگر نیاز دارید حفظ شود */}
                  <button onClick={() => setActiveTopic(null)} style={styles.closeButton}>
                      &times;
                  </button>
              </div>

              <div style={{padding: '10px', color: '#e2e8f0'}}>
                  
                  {/* 1. نمایش محتوای خلاصه/مقدمه (activeTopic.content) */}
                  <p style={{ fontSize: '1.1rem', marginBottom: '30px', lineHeight: '1.7' }}>
                      {activeTopic.content || "مقدمه‌ای برای این تاپیک تعریف نشده است."}
                  </p>
                  
                  {/* 2. رندرینگ کامل زیرمجموعه‌ها و محتوای تفصیلی آن‌ها */}
                  {activeTopic.subtopics && activeTopic.subtopics.length > 0 && (
                      <div style={styles.subtopicsContainer}>
                          <h4 style={{color: secondaryColor, borderBottom: '1px solid #374151', paddingBottom: '10px', marginBottom: '20px'}}>
                              جزئیات موضوع:
                          </h4>
                          
                          {activeTopic.subtopics.map((sub, i) => (
                              <div key={i} style={styles.subtopicDetailItem}> {/* استفاده از استایل جدید */}
                                  
                                  {/* عنوان زیرمجموعه */}
                                  <h5 style={{...styles.subtopicTitleStyle, color: chapterColor}}>
                                      {i+1}. {sub.title || sub.name || "زیرمجموعه بدون عنوان"}
                                  </h5>
                                  
                                  {/* محتوای تفصیلی زیرمجموعه (این همان چیزی است که به آن نیاز داشتید) */}
                                  <p style={{color: '#a0aec0', lineHeight: '1.6'}}>
                                      {sub.content || "محتوای تفصیلی برای این زیرمجموعه موجود نیست."}
                                  </p>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          </div>
      );
  };



  // --- ساختار نهایی JSX (سه ستون) ---
  return (
    <div style={styles.mainContainer}>
      <div style={styles.topBar}>
        <button style={styles.backButton} onClick={onBack}>بازگشت</button>
        <div style={{ flexGrow: 1, textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold' }}>
            {lesson.title}
        </div>
      </div>
      <div style={styles.threeColumnSplit}>
        
        {/* ستون 1 (راست): ناوبری عمودی فصل‌ها */}
        {renderVerticalChapterNav()} 
        
        {/* ستون 2 (وسط): لیست تاپیک‌ها */}
        <div style={styles.topicListPanel}>
            {renderTopicList()}
        </div>
        
        {/* ستون 3 (چپ): نمایش محتوا */}
        {renderContentArea()}
      </div>
    </div>
  );
}
