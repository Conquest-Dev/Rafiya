// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ugM6rmprqae5FXqemuYpLm
// Component: 8nE1YSOiHIwE

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import PageLayout from "../../PageLayout"; // plasmic-import: Ln2tCX6ptptG/component
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";
import { RichList } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-list";
import { RichTable } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { tableHelpers as RichTable_Helpers } from "@plasmicpkgs/plasmic-rich-components/skinny/rich-table";
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantscyIgCc3X6IQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: cyIg-cc3x6iQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ugM6rmprqae5FXqemuYpLm/projectcss
import sty from "./PlasmicPositions.module.css"; // plasmic-import: 8nE1YSOiHIwE/css

createPlasmicElementProxy;

export type PlasmicPositions__VariantMembers = {};
export type PlasmicPositions__VariantsArgs = {};
type VariantPropType = keyof PlasmicPositions__VariantsArgs;
export const PlasmicPositions__VariantProps = new Array<VariantPropType>();

export type PlasmicPositions__ArgsType = {};
type ArgPropType = keyof PlasmicPositions__ArgsType;
export const PlasmicPositions__ArgProps = new Array<ArgPropType>();

export type PlasmicPositions__OverridesType = {
  root?: Flex__<"div">;
  pageLayout?: Flex__<typeof PageLayout>;
  section?: Flex__<"section">;
  dataList?: Flex__<typeof RichList>;
  positions?: Flex__<typeof RichTable>;
};

export interface DefaultPositionsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPositions__RenderFunc(props: {
  variants: PlasmicPositions__VariantsArgs;
  args: PlasmicPositions__ArgsType;
  overrides: PlasmicPositions__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "positions.selectedRowKey",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKey", RichTable_Helpers)
      },
      {
        path: "positions.selectedRow",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRow", RichTable_Helpers)
      },
      {
        path: "positions.selectedRows",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRows", RichTable_Helpers)
      },
      {
        path: "positions.selectedRowKeys",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        onMutate: generateOnMutateForSpec("selectedRowKeys", RichTable_Helpers)
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
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    positions: usePlasmicDataOp(() => {
      return {
        sourceId: "fZbzzfQKdR4pvGU9HptEUD",
        opId: "3f7d6f50-aa48-4c42-9f3d-8ebf48796c71",
        userArgs: {},
        cacheKey: `plasmic.$.3f7d6f50-aa48-4c42-9f3d-8ebf48796c71.$.`,
        invalidatedKeys: null,
        roleId: "c246114d-0e1f-40f8-9205-fb602495e509"
      };
    }),
    depts: usePlasmicDataOp(() => {
      return {
        sourceId: "fZbzzfQKdR4pvGU9HptEUD",
        opId: "71a13801-b639-45c1-8769-c8e673afdb8d",
        userArgs: {},
        cacheKey: `plasmic.$.71a13801-b639-45c1-8769-c8e673afdb8d.$.`,
        invalidatedKeys: null,
        roleId: "c246114d-0e1f-40f8-9205-fb602495e509"
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantscyIgCc3X6IQ()
  });

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
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
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
            sty.root
          )}
        >
          <PageLayout
            data-plasmic-name={"pageLayout"}
            data-plasmic-override={overrides.pageLayout}
            className={classNames("__wab_instance", sty.pageLayout)}
          >
            <DataCtxReader__>
              {$ctx => (
                <section
                  data-plasmic-name={"section"}
                  data-plasmic-override={overrides.section}
                  className={classNames(projectcss.all, sty.section)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nQzF)}
                  >
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__fpGm)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__icdfn
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___7TO6O
                          )}
                        >
                          <h4
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4__pwYsV
                            )}
                          >
                            {"Departments"}
                          </h4>
                          <p
                            className={classNames(
                              projectcss.all,
                              projectcss.p,
                              projectcss.__wab_text,
                              sty.p__q44T
                            )}
                          >
                            {
                              "There are two queries on this page. One is for depts, and the other is for positions."
                            }
                          </p>
                        </Stack__>
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button__h6HKh
                          )}
                          href={`/new-department`}
                          size={"large"}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__pGnpG
                            )}
                          >
                            {"Add a dept"}
                          </div>
                        </AntdButton>
                      </Stack__>
                      <RichList
                        data-plasmic-name={"dataList"}
                        data-plasmic-override={overrides.dataList}
                        bordered={true}
                        className={classNames("__wab_instance", sty.dataList)}
                        data={(() => {
                          try {
                            return $queries.depts;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        rowActions={(() => {
                          const __composite = [
                            { type: null, label: null, children: null }
                          ];
                          __composite["0"]["type"] = "menu";
                          __composite["0"]["label"] = "...";
                          __composite["0"]["children"] = (() => {
                            const __composite = [
                              { label: null, onClick: null }
                            ];
                            __composite["0"]["label"] = "Delete";
                            __composite["0"]["onClick"] = async (
                              rowKey,
                              row
                            ) => {
                              const $steps = {};

                              $steps["tutorialdbDeleteMany"] = true
                                ? (() => {
                                    const actionArgs = {
                                      dataOp: {
                                        sourceId: "fZbzzfQKdR4pvGU9HptEUD",
                                        opId: "ae8733df-26b5-4518-a2ca-c63d7b50f465",
                                        userArgs: {
                                          conditions: [row.id]
                                        },
                                        cacheKey: null,
                                        invalidatedKeys: [
                                          "plasmic_refresh_all"
                                        ],
                                        roleId: null
                                      }
                                    };
                                    return (async ({
                                      dataOp,
                                      continueOnError
                                    }) => {
                                      try {
                                        const response =
                                          await executePlasmicDataOp(dataOp, {
                                            userAuthToken:
                                              dataSourcesCtx?.userAuthToken,
                                            user: dataSourcesCtx?.user
                                          });
                                        await plasmicInvalidate(
                                          dataOp.invalidatedKeys
                                        );
                                        return response;
                                      } catch (e) {
                                        if (!continueOnError) {
                                          throw e;
                                        }
                                        return e;
                                      }
                                    })?.apply(null, [actionArgs]);
                                  })()
                                : undefined;
                              if (
                                $steps["tutorialdbDeleteMany"] != null &&
                                typeof $steps["tutorialdbDeleteMany"] ===
                                  "object" &&
                                typeof $steps["tutorialdbDeleteMany"].then ===
                                  "function"
                              ) {
                                $steps["tutorialdbDeleteMany"] = await $steps[
                                  "tutorialdbDeleteMany"
                                ];
                              }
                            };
                            return __composite;
                          })();
                          return __composite;
                        })()}
                        type={"grid"}
                      />
                    </Stack__>
                    <Stack__
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__sep91)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox___7UlBx
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__km01X
                          )}
                        >
                          <h4
                            className={classNames(
                              projectcss.all,
                              projectcss.h4,
                              projectcss.__wab_text,
                              sty.h4__whRwn
                            )}
                          >
                            {"Jobs"}
                          </h4>
                          <p
                            className={classNames(
                              projectcss.all,
                              projectcss.p,
                              projectcss.__wab_text,
                              sty.p___5JNvi
                            )}
                          >
                            {
                              "View all job listings across your organization and their applicant numbers. This one uses a custom SQL query to also pull in the number of items."
                            }
                          </p>
                        </Stack__>
                        <AntdButton
                          className={classNames(
                            "__wab_instance",
                            sty.button__rllwu
                          )}
                          href={`/new-position`}
                          size={"large"}
                          type={"primary"}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__a3OXh
                            )}
                          >
                            {"Add a job"}
                          </div>
                        </AntdButton>
                      </Stack__>
                      {(() => {
                        const child$Props = {
                          canSelectRows: "click",
                          className: classNames(
                            "__wab_instance",
                            sty.positions
                          ),
                          data: (() => {
                            try {
                              return $queries.positions;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return undefined;
                              }
                              throw e;
                            }
                          })(),
                          defaultSize: hasVariant(
                            globalVariants,
                            "screen",
                            "mobileOnly"
                          )
                            ? "small"
                            : undefined,
                          fields: (() => {
                            const __composite = [
                              { key: "id", fieldId: "id", isHidden: null },
                              { key: "title", fieldId: "title" },
                              {
                                key: "description",
                                fieldId: "description",
                                isHidden: null
                              },
                              {
                                key: "department_id",
                                fieldId: "department_id",
                                title: null,
                                isHidden: null
                              },
                              {
                                key: "archived",
                                fieldId: "archived",
                                isHidden: null
                              },
                              {
                                key: "created_at",
                                fieldId: "created_at",
                                isHidden: null
                              },
                              { key: "dept", fieldId: "dept", title: null },
                              {
                                key: "num_candidates",
                                fieldId: "num_candidates",
                                isHidden: null
                              },
                              {
                                key: "num_active_candidates",
                                fieldId: "num_active_candidates",
                                title: null
                              }
                            ];
                            __composite["0"]["isHidden"] = true;
                            __composite["2"]["isHidden"] = true;
                            __composite["3"]["title"] = "dept";
                            __composite["3"]["isHidden"] = true;
                            __composite["4"]["isHidden"] = true;
                            __composite["5"]["isHidden"] = true;
                            __composite["6"]["title"] = "Dept";
                            __composite["7"]["isHidden"] = true;
                            __composite["8"]["title"] = "Active Candidates";
                            return __composite;
                          })(),

                          onRowClick: async (rowKey, row, event) => {
                            const $steps = {};

                            $steps["goToPosition"] = true
                              ? (() => {
                                  const actionArgs = {
                                    destination: `/position/${(() => {
                                      try {
                                        return row.id;
                                      } catch (e) {
                                        if (
                                          e instanceof TypeError ||
                                          e?.plasmicType ===
                                            "PlasmicUndefinedDataError"
                                        ) {
                                          return undefined;
                                        }
                                        throw e;
                                      }
                                    })()}`
                                  };
                                  return (({ destination }) => {
                                    if (
                                      typeof destination === "string" &&
                                      destination.startsWith("#")
                                    ) {
                                      document
                                        .getElementById(destination.substr(1))
                                        .scrollIntoView({ behavior: "smooth" });
                                    } else {
                                      __nextRouter?.push(destination);
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["goToPosition"] != null &&
                              typeof $steps["goToPosition"] === "object" &&
                              typeof $steps["goToPosition"].then === "function"
                            ) {
                              $steps["goToPosition"] = await $steps[
                                "goToPosition"
                              ];
                            }
                          },
                          onRowSelectionChanged: async (...eventArgs: any) => {
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRowKey",
                              ["positions", "selectedRowKey"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRow",
                              ["positions", "selectedRow"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRows",
                              ["positions", "selectedRows"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                            generateStateOnChangePropForCodeComponents(
                              $state,
                              "selectedRowKeys",
                              ["positions", "selectedRowKeys"],
                              RichTable_Helpers
                            ).apply(null, eventArgs);
                          },
                          pageSize: 20,
                          scopeClassName: sty["positions__instance"],
                          selectedRowKey: generateStateValueProp($state, [
                            "positions",
                            "selectedRowKey"
                          ]),
                          selectedRowKeys: generateStateValueProp($state, [
                            "positions",
                            "selectedRowKeys"
                          ]),
                          themeResetClassName: classNames(
                            projectcss.root_reset,
                            projectcss.root_reset_tags,
                            projectcss.plasmic_default_styles,
                            projectcss.plasmic_mixins,
                            projectcss.plasmic_tokens,
                            plasmic_antd_5_hostless_css.plasmic_tokens,
                            plasmic_plasmic_rich_components_css.plasmic_tokens
                          )
                        };
                        initializeCodeComponentStates(
                          $state,
                          [
                            {
                              name: "selectedRowKey",
                              plasmicStateName: "positions.selectedRowKey"
                            },
                            {
                              name: "selectedRow",
                              plasmicStateName: "positions.selectedRow"
                            },
                            {
                              name: "selectedRows",
                              plasmicStateName: "positions.selectedRows"
                            },
                            {
                              name: "selectedRowKeys",
                              plasmicStateName: "positions.selectedRowKeys"
                            }
                          ],
                          [],
                          RichTable_Helpers ?? {},
                          child$Props
                        );

                        return (
                          <RichTable
                            data-plasmic-name={"positions"}
                            data-plasmic-override={overrides.positions}
                            {...child$Props}
                          />
                        );
                      })()}
                    </Stack__>
                  </Stack__>
                </section>
              )}
            </DataCtxReader__>
          </PageLayout>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "pageLayout", "section", "dataList", "positions"],
  pageLayout: ["pageLayout", "section", "dataList", "positions"],
  section: ["section", "dataList", "positions"],
  dataList: ["dataList"],
  positions: ["positions"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  pageLayout: typeof PageLayout;
  section: "section";
  dataList: typeof RichList;
  positions: typeof RichTable;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPositions__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPositions__VariantsArgs;
    args?: PlasmicPositions__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPositions__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPositions__ArgsType,
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
          internalArgPropNames: PlasmicPositions__ArgProps,
          internalVariantPropNames: PlasmicPositions__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPositions__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPositions";
  } else {
    func.displayName = `PlasmicPositions.${nodeName}`;
  }
  return func;
}

function withPlasmicPageGuard<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const PageGuard: React.FC<P> = props => (
    <PlasmicPageGuard__
      minRole={"c246114d-0e1f-40f8-9205-fb602495e509"}
      appId={"ugM6rmprqae5FXqemuYpLm"}
      authorizeEndpoint={"https://studio.plasmic.app/authorize"}
      canTriggerLogin={true}
    >
      <WrappedComponent {...props} />
    </PlasmicPageGuard__>
  );

  return PageGuard;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "ugM6rmprqae5FXqemuYpLm"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicPositions = Object.assign(
  // Top-level PlasmicPositions renders the root element
  withUsePlasmicAuth(withPlasmicPageGuard(makeNodeComponent("root"))),
  {
    // Helper components rendering sub-elements
    pageLayout: makeNodeComponent("pageLayout"),
    section: makeNodeComponent("section"),
    dataList: makeNodeComponent("dataList"),
    positions: makeNodeComponent("positions"),

    // Metadata about props expected for PlasmicPositions
    internalVariantProps: PlasmicPositions__VariantProps,
    internalArgProps: PlasmicPositions__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPositions;
/* prettier-ignore-end */
