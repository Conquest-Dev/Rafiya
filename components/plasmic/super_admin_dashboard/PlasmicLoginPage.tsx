// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Wyypaj28HpFwgqusnxkCW
// Component: TFo_D-cEkGNF

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import LoginForm from "../../LoginForm"; // plasmic-import: fnfdsio9HzJu/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5Wyypaj28HpFwgqusnxkCW/projectcss
import sty from "./PlasmicLoginPage.module.css"; // plasmic-import: TFo_D-cEkGNF/css

createPlasmicElementProxy;

export type PlasmicLoginPage__VariantMembers = {};
export type PlasmicLoginPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicLoginPage__VariantsArgs;
export const PlasmicLoginPage__VariantProps = new Array<VariantPropType>();

export type PlasmicLoginPage__ArgsType = {};
type ArgPropType = keyof PlasmicLoginPage__ArgsType;
export const PlasmicLoginPage__ArgProps = new Array<ArgPropType>();

export type PlasmicLoginPage__OverridesType = {
  login?: Flex__<"div">;
  loginForm?: Flex__<typeof LoginForm>;
};

export interface DefaultLoginPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLoginPage__RenderFunc(props: {
  variants: PlasmicLoginPage__VariantsArgs;
  args: PlasmicLoginPage__ArgsType;
  overrides: PlasmicLoginPage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "loginForm.email",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "loginForm.password",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    login: usePlasmicDataOp(() => {
      return {
        sourceId: "sqSJ99U7AGb75jyuVumvLv",
        opId: "38f084b2-561d-47db-9b1a-80357e38fdf6",
        userArgs: {},
        cacheKey: `plasmic.$.38f084b2-561d-47db-9b1a-80357e38fdf6.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"login"}
          data-plasmic-override={overrides.login}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            sty.login
          )}
        >
          <LoginForm
            data-plasmic-name={"loginForm"}
            data-plasmic-override={overrides.loginForm}
            className={classNames("__wab_instance", sty.loginForm)}
            onEmailChange={generateStateOnChangeProp($state, [
              "loginForm",
              "email"
            ])}
            onPasswordChange={generateStateOnChangeProp($state, [
              "loginForm",
              "password"
            ])}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  login: ["login", "loginForm"],
  loginForm: ["loginForm"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  login: "div";
  loginForm: typeof LoginForm;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLoginPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLoginPage__VariantsArgs;
    args?: PlasmicLoginPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLoginPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLoginPage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLoginPage__ArgProps,
          internalVariantPropNames: PlasmicLoginPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLoginPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "login") {
    func.displayName = "PlasmicLoginPage";
  } else {
    func.displayName = `PlasmicLoginPage.${nodeName}`;
  }
  return func;
}

export const PlasmicLoginPage = Object.assign(
  // Top-level PlasmicLoginPage renders the root element
  makeNodeComponent("login"),
  {
    // Helper components rendering sub-elements
    loginForm: makeNodeComponent("loginForm"),

    // Metadata about props expected for PlasmicLoginPage
    internalVariantProps: PlasmicLoginPage__VariantProps,
    internalArgProps: PlasmicLoginPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicLoginPage;
/* prettier-ignore-end */
