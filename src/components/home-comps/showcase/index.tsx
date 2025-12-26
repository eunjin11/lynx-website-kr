import React from 'react';
import { useLang } from '@rspress/core/runtime';
import { Link } from '@rspress/core/theme';
import styles from './index.module.less';
import { MobileShow } from './mobile-show';

const showCaseList = [
  {
    title: {
      en: 'Two-Column Waterfall Gallery',
      zh: '瀑布流的产品双列',
      ko: '2열 Waterfall 갤러리',
    },
    desc: {
      en: 'Cover everything you need to know to start building with Lynx.',
      zh: '涵盖你开始使用 Lynx 所需了解的一切。',
      ko: 'Lynx를 시작하기 위해 알아야 할 모든 것을 포함합니다.',
    },
    class: 'case-0',
    link: {
      en: '/guide/start/tutorial-gallery',
      zh: '/zh/guide/start/tutorial-gallery',
      ko: '/ko/guide/start/tutorial-gallery',
    },
  },
  {
    title: {
      en: 'Product Detail with Carousel',
      zh: '轮播图的产品详情',
      ko: 'Carousel로 제품 상세 보기',
    },
    desc: {
      en: 'Deep dive into main thread scripting by building a highly responsive swiper.',
      zh: '通过打造轮播图深入了解主线程脚本。',
      ko: 'Highly responsive swiper를 빌드하여 메인 스레드 스크립팅을 자세히 알아보세요.',
    },
    class: 'case-1',
    link: {
      en: '/guide/start/tutorial-product-detail',
      zh: '/zh/guide/start/tutorial-product-detail',
      ko: '/ko/guide/start/tutorial-product-detail',
    },
  },
  // {
  //   title: {
  //     en: 'Payment Details',
  //     zh: 'Payment Details',
  //   },
  //   desc: {
  //     en: 'Description',
  //     zh: '描述',
  //   },
  //   class: 'case-2',
  //   link: undefined,
  // },
] as const;

const caseTitle = {
  zh: '上手体验',
  en: 'Try it for yourself',
  ko: '직접 사용해보세요',
} as const;

const caseDesc = {
  en: 'Experience true native feel, instant launch, and silky interactions.',
  zh: '体验原生质感，即刻启动，流畅交互。',
  ko: '진정한 네이티브 경험, 즉시 실행, 부드러운 상호작용.',
} as const;

export const ShowCase: React.FC = () => {
  const lang = useLang() as 'en' | 'zh' | 'ko';

  return (
    <div className={styles['show-case-frame']}>
      <div className={styles['title']}>{caseTitle[lang]}</div>
      <div className={styles['desc']}>{caseDesc[lang]}</div>
      <ul className={styles['show-case-list']}>
        {showCaseList.map((item, index) => {
          return (
            <li className={styles['show-case-list-item']} key={index}>
              <MobileShow preview={item.class} />
              <div className={`${styles['item-title']} pb-2`}>
                {item.title[lang]}
              </div>
              <div className={`${styles['item-desc']} pb-2`}>
                {item.desc[lang]}
              </div>
              {!!item.link && (
                <Link
                  href={item.link[lang]}
                  style={{
                    color: 'var(--home-showcase-item-link-color)',
                    fontSize: '14px',
                    lineHeight: '24px',
                  }}
                >
                  {lang === 'zh'
                    ? '跟随教程编写'
                    : lang === 'ko'
                      ? '자습서를 따라하여 배우기'
                      : 'Learn by doing'}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
