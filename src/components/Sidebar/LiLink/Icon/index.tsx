import type { SVGAttributes, CSSProperties } from 'react';
import { DashboardIcon } from './Dashboard';
import { DumbbellIcon } from './Dumbbell';
import { ForkKnifeIcon } from './ForkKnife';
import { ListIcon } from './List';
import { UserIcon } from './User';

import * as S from './style';

type SideBarIconsProps = {
  svgClassName: string;
  pathClassName: string;
  pathStyle: CSSProperties;
} & SVGAttributes<SVGElement>;

type SideBarIconType = 'dashboard' | 'dumbbell' | 'forkKnife' | 'list' | 'user';

type SideBarIconComponentProps = {
  type: SideBarIconType;
  isActive: boolean;
};

function SideBarIcon({ type, isActive }: SideBarIconComponentProps) {
  const components: Record<SideBarIconType, JSX.Element> = {
    dashboard: (
      <DashboardIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    dumbbell: (
      <DumbbellIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    forkKnife: (
      <ForkKnifeIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    ),
    list: (
      <ListIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        circleClassName={S.circleIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
        circleStyle={S.circleStyleFn(isActive)}
      />
    ),
    user: (
      <UserIcon
        svgClassName={S.svgIconClassName}
        pathClassName={S.pathIconClassName}
        pathStyle={S.pathStyleFn(isActive)}
      />
    )
  };

  return components[type] || null;
}

export { SideBarIcon };
export type { SideBarIconsProps, SideBarIconType };
