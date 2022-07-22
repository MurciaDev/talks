ThisBuild / scalaVersion := "2.13.8"

lazy val commonSettings = Seq(
  libraryDependencies ++= Seq(
    "org.scalameta"  %% "munit"            % "0.7.29",
    "org.scalameta"  %% "munit-scalacheck" % "0.7.29",
    "org.scalacheck" %% "scalacheck"       % "1.16.0"
  )
)

scalacOptions ++= Seq(
  "-Yrangepos"
)

lazy val `pbt-talk` = project
  .in(file("."))
  .aggregate(pbt, talk)
  .dependsOn(pbt, talk)

lazy val pbt = project
  .in(file("modules/pbt"))
  .settings(commonSettings)

lazy val talk =
  project
    .in(file("modules/talk"))
    .enablePlugins(MdocPlugin, GitHubPagesPlugin)
    .settings(
      gitHubPagesOrgName  := "bilki",
      gitHubPagesRepoName := "pbt-talk",
      gitHubPagesSiteDir  := baseDirectory.value / "target" / "mdoc",
      mdocIn              := baseDirectory.value / "slides"
    )
    .settings(commonSettings)
    .dependsOn(pbt)
