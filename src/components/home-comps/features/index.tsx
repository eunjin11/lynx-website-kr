import { Space } from '@douyinfe/semi-ui';
import useIfMobile from '@site/theme/hooks/use-if-mobile';
import React, { ReactNode, useEffect, useState } from 'react';
import styles from './index.module.less';
import { Moon } from './moon';
import { WriteOnceRunAllPlatform } from './write-once-run-all-platform';
import cls from 'classnames';
import { useLang } from '@rspress/core/runtime';
import { BorderBeam } from '../border-beam';
import { ActionBtn } from './action-btn';
import { FeatureItem } from './feature-item';
import { IconAndroid, IconHarmony, IconIOS, IconWeb } from './icon';
import { FeatureIconItem } from './item-icon';
type FeaturesConfigKey = '/' | '/react/' | '/rspeedy/';

// 最大倾斜角度（度数）
const maxDegree = 6;
const featuresConfig: Record<
  FeaturesConfigKey,
  Array<{
    title: { en: string; zh: string; ko: string };
    desc: { en: string; zh: string; ko: string };
    class?: string;
    isRowSet?: boolean | number;
    iconClass?: string;
    actions?: {
      text: string | React.ReactNode;
      link?: string;
      size: string;
    }[];
    customRender?: ReactNode;
  }>
> = {
  '/': [
    {
      title: {
        en: 'Write Once, Render Anywhere',
        zh: '一次编写，多端渲染',
        ko: '한 번 작성, 어디서나 렌더링',
      },
      desc: {
        en: 'Enjoy native rendering on iOS, Android, HarmonyOS and Web, or pixel-perfect consistency across mobile and desktop via our custom renderer.',
        zh: '享受 iOS， Android，鸿蒙, Web 原生渲染，或选择在移动和桌面端达到像素级一致的自渲染。',
        ko: 'iOS, Android, HarmonyOS 및 Web에서 네이티브 렌더링을 즐기거나, 커스텀 렌더러를 통해 모바일과 데스크톱에서 픽셀 완벽한 일관성을 경험하세요.',
      },
      actions: [
        {
          text: (
            <Space>
              <IconIOS />
              iOS
            </Space>
          ),
          size: 'large',
          link: 'guide/start/integrate-with-existing-apps.html?platform=ios',
        },
        {
          text: (
            <Space>
              <IconAndroid />
              Android
            </Space>
          ),
          link: 'guide/start/integrate-with-existing-apps.html?platform=android',
          size: 'large',
        },
        {
          text: (
            <Space>
              <IconHarmony />
              HarmonyOS
            </Space>
          ),
          size: 'large',
          link: 'guide/start/integrate-with-existing-apps.html?platform=harmony',
        },
        {
          text: (
            <Space>
              <IconWeb />
              Web
            </Space>
          ),
          size: 'large',
          link: 'guide/start/integrate-with-existing-apps.html?platform=web',
        },
      ],
    },
    {
      title: {
        en: 'Performance at Scale',
        zh: '高性能，规模化',
        ko: '대규모 성능',
      },
      desc: {
        en: 'Achieve instant launch and silky UI responsiveness via our multithreaded engine, whether standalone or embedded.',
        zh: '基于多线程引擎，带来瞬时启动和丝滑交互体验，无论是单页还是嵌入场景。',
        ko: '멀티스레드 엔진을 통해 독립형이든 임베디드든 즉각적인 실행과 부드러운 UI 반응성을 달성하세요.',
      },
      customRender: <WriteOnceRunAllPlatform />,
    },
    {
      isRowSet: true,
      // class: 'item2',
      title: {
        en: 'Web-Inspired Design',
        zh: 'Web 启发',
        ko: 'Web에서 영감받은 디자인',
      },
      desc: {
        en: 'Leverage your existing knowledge of CSS and React. We designed Lynx with the web knowledge and libraries in mind.',
        zh: '延续 Web 开发范式，继续使用熟悉的 CSS 和 React 등技术，复用知识与生态。',
        ko: '기존 CSS와 React 지식을 활용하세요. Lynx는 웹 지식과 라이브러리를 염두에 두고 설계되었습니다.',
      },
      customRender: <Moon />,
    },
  ],
  '/react/': [
    {
      iconClass: 'react',
      isRowSet: 508,
      title: {
        en: 'Aligned with React 17+',
        zh: '对齐 React 17+',
        ko: 'React 17+ 호환',
      },
      desc: {
        en: 'Built on battle-tested open-source implementations, it fully supports functional components, Hooks, and Context—the same set of modern React APIs.',
        zh: '基于成熟的开源实现并有测试保障，完整支持函数式组件、Hooks、Context 等现代 React API。',
        ko: '검증된 오픈소스 구현을 기반으로 하며, 함수형 컴포넌트, Hooks, Context 등 최신 React API를 완벽히 지원합니다.',
      },
      actions: [
        {
          text: 'Hooks',
          link: 'https://react.dev/reference/react/hooks',
          size: 'large',
        },
        {
          text: 'Context',
          link: 'https://react.dev/reference/react/hooks#context-hooks',
          size: 'large',
        },
      ],
    },
    {
      iconClass: 'performance',
      class: 'item3',
      title: {
        en: 'Made for Lynx',
        zh: '为 Lynx 量身定做',
        ko: 'Lynx를 위한 맞춤 제작',
      },
      desc: {
        en: "Dual-threaded React tailor-made for Lynx, carrying over Lynx's instant launch and silky UI responsiveness.",
        zh: '基于 Lynx 量身定做的双线程 React，延续 Lynx 的瞬时启동和丝滑交互。',
        ko: 'Lynx를 위해 맞춤 제작된 듀얼 스레드 React로 Lynx의 즉각적인 실행과 부드러운 UI 반응성을 이어갑니다.',
      },
    },
    {
      iconClass: 'ecosystem',
      title: {
        en: 'Compatible with React Ecosystem',
        zh: 'React 生态兼容',
        ko: 'React 생태계 호환',
      },
      desc: {
        en: 'With Jotai and Zustand for state management, TanStack Query for data fetching, Fast Refresh and DevTools for React components, everything you need is here.',
        zh: 'Jotai、Zustand 등状态管理、TanStack Query 数据请求、Fast Refresh 热更新和 React 开发工具，应有尽有。',
        ko: 'Jotai와 Zustand로 상태 관리, TanStack Query로 데이터 페칭, React 컴포넌트용 Fast Refresh와 DevTools까지, 필요한 모든 것이 여기 있습니다.',
      },
      actions: [
        {
          text: 'Jotai',
          link: 'https://jotai.org/',
          size: 'normal',
        },
        {
          text: 'Zustand',
          link: 'https://zustand-demo.pmnd.rs/',
          size: 'normal',
        },
        {
          text: 'Tanstack Query',
          link: 'https://tanstack.com/query',
          size: 'large',
        },
      ],
    },
  ],
  '/rspeedy/': [
    {
      iconClass: 'rstack',
      class: 'item4',
      isRowSet: true,
      title: {
        en: 'Rstack-based',
        zh: '基于 Rstack',
        ko: 'Rstack 기반',
      },
      desc: {
        en: 'Using Rspack and Rsbuild to bring you the ultimate development experience.',
        zh: '享受 Rstack 带来的极致开发体验。',
        ko: 'Rspack과 Rsbuild를 사용하여 최고의 개발 경험을 제공합니다.',
      },
    },
    {
      iconClass: 'batteries',
      title: {
        en: 'Batteries Included',
        zh: '开箱即用',
        ko: '기본 포함',
      },
      desc: {
        en: 'Out-of-the-box integration with the most practical building features in the ecosystem.',
        zh: '集成生态中最实用的构建功能。',
        ko: '생태계에서 가장 실용적인 빌드 기능이 즉시 통합되어 있습니다.',
      },
    },
    {
      iconClass: 'config',
      title: {
        en: 'Easy to Configure',
        zh: '易于配置',
        ko: '쉬운 설정',
      },
      desc: {
        en: 'Start with zero configuration and everything is configurable.',
        zh: '以零配置启动，然后一切皆可配置。',
        ko: '제로 설정으로 시작하고, 모든 것을 설정할 수 있습니다.',
      },
    },
  ],
};

const Features = ({ src = '/' }: { src?: string }) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const lang = useLang() as 'en' | 'zh' | 'ko';
  const configKey = (
    src.startsWith('/react/')
      ? '/react/'
      : src.startsWith('/rspeedy/')
        ? '/rspeedy/'
        : '/'
  ) as FeaturesConfigKey;
  const isMobile = useIfMobile();

  const featuresConfigTarget = featuresConfig[configKey];

  const doBeamBorder = (isHover: boolean, index: number) => {
    if (isHover) {
      setHoverIndex(index);
    } else {
      setHoverIndex(null);
    }
  };

  useEffect(() => {
    if (isMobile) return;

    const items = document.querySelectorAll('#hover-feature-item');

    const handleMouseMove = (e: MouseEvent, item: HTMLElement) => {
      const rect = item.getBoundingClientRect();

      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      const rotateX = -y * maxDegree;
      const rotateY = x * maxDegree;

      item.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (item: HTMLElement) => {
      item.style.transform = 'none';
    };

    items.forEach((item) => {
      item.addEventListener('mousemove', (e) =>
        handleMouseMove(e as MouseEvent, item as HTMLElement),
      );
      item.addEventListener('mouseleave', () =>
        handleMouseLeave(item as HTMLElement),
      );
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener('mousemove', (e) =>
          handleMouseMove(e as MouseEvent, item as HTMLElement),
        );
        item.removeEventListener('mouseleave', () =>
          handleMouseLeave(item as HTMLElement),
        );
      });
    };
  }, []);

  return (
    <div className={styles['features-frame']}>
      <div className={styles['list-frame']}>
        {featuresConfigTarget.map((item, index) => (
          <div
            className={cls(
              styles['list-item'],
              !!item.isRowSet && styles['row-set'],
            )}
            key={index}
            id="hover-feature-item"
            onMouseEnter={() => {
              doBeamBorder(true, index);
            }}
            onMouseLeave={() => {
              doBeamBorder(false, index);
            }}
            style={
              !!item.isRowSet && typeof item.isRowSet === 'number'
                ? { paddingRight: `${item.isRowSet}px` }
                : {}
            }
          >
            {!!item.iconClass && <FeatureIconItem index={item.iconClass} />}
            <div className={cls(styles['title'])}>{item.title[lang]}</div>
            <div className={cls(styles['desc'])}>{item.desc[lang]}</div>
            {item.customRender !== undefined && item.customRender}
            {!!item.actions?.length && (
              <div className={styles['action-frame']}>
                {item.actions.map((action, actionIndex) => (
                  <ActionBtn
                    key={actionIndex}
                    text={action.text}
                    link={action.link}
                    size={action.size}
                  />
                ))}
              </div>
            )}
            {!!item.class && <FeatureItem index={item.class} />}
            {hoverIndex === index && !isMobile && (
              <BorderBeam color="#3b82f6" size={2} duration={3} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Features };
