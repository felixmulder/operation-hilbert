---
title: Programming Languages and their efficacy
---

> "Wir müssen wissen — wir werden wissen!" -- David Hilbert, 1930[^wir-mussen]

This project aims to provide data for analysis with regards to the efficacy of
programming languages.

## Background
During the time of writing, the availability of scientifically backed data on
different aspects of programming language efficacy is severely lacking. This
makes it hard to have an informed debate on the suitability of certain
programming languages for certain tasks. Typically the motivation for using or
refusing to use a certain language comes down to individual preference and
preconceived notions.

## Problems with existing studies
There exist a bunch of empirical studies on the efficacy of programming
languages and paradigms in certain contexts. They seem, however, to not be up
to par when it comes to criteria[^meta-study] of:

- Scientific hypothesis
- Sound methodology[^github-study]
- Sufficient underlying data[^prototyping-haskell-vs-ada]
- Unbiased[^api-doc-static]

## Points of contention

### Functional versus object oriented
While most modern major programming languages (such as C#, Java and Swift) are
increasingly drawing influence from functional programming. There is no data
that suggests that either paradigm is *better* than the other.

### Difficulty to understand
Certain languages are perceived as being more difficult to understand. It is
difficult to say if this is justified as the statement itself is hard to
quantify. Is it because of lack of knowledge in the language's paradigm? Is it
because of alien-looking syntax? Is it because the person stating this has had
first hand exposure to different paradigms and languages over extended periods
of time and thus makes a fair proclamation?

### Typed versus untyped
Proponents of typed languages will say that types eliminate an entire class of
runtime errors. Proponents of untyped languages will say that the
types get in the way of what they're trying to do.

### Rapid prototyping
Certain languages are known for lending themselves especially well to rapid
prototyping of programs and features. This perception is especially true for
languages that are untyped. As with other points of contention in this
document, it is hard to make any solid claims as some studies lack data points
or the chosen methodology measures something other than that which is intended.

### Maintainability
Some of the largest open source software projects in the world are built using
fairly untyped languages. E.g. Linux is built as a monolithic kernel in C. It
is often argued that micro kernels are more maintainable than their monolithic
counterparts[^mono-vs-micro] and that languages with stronger typesystems are
more maintable over time. But there seems to be little evidence for or against
these claims.

[^wir-mussen]: [From David Hilbert's famous retirement
  address](https://en.wikipedia.org/wiki/David_Hilbert#cite_ref-19), "We must
  know, we will know". Made to the Society of German Scientists and Physicians
  on 8 September 1930. The day before this phrase was uttered, Gödel unveiled
  his incompleteness theorem.  This theorem shows that elementary axiomatic
  systems such as Peano arithmetic are either self-contradicting or contain
  logical propositions that are either impossible to prove or disprove. I find
  this a fitting tagline for studies on a topic that is as contentious as
  programming language efficacy.

[^meta-study]: [Meta study on Dynamic v. Static Typing](https://danluu.com/empirical-pl/)

[^github-study]: Study uses the commit log in order to determine how many bugs there were
  for each project, which gives the result of how efficiently bugs are
  reported and fixed in a project rather than prove the absence of them -
  [A large scale study of programming languages and code quality in
  Github](https://dl.acm.org/citation.cfm?id=2635922)

[^prototyping-haskell-vs-ada]: Single sample size for each language except Haskell - [Haskell vs. Ada
  vs. C++ vs. Awk vs. ... An Experiment in Software Prototyping
  Productivity](http://haskell.cs.yale.edu/wp-content/uploads/2011/03/HaskellVsAda-NSWC.pdf)

[^api-doc-static]: Project chosen that was thought to specifically benefit from static
  typing and API documentation. [How Do API Documentation and Static Typing
  Affect API
  Usability?](http://users.dcc.uchile.cl/~rrobbes/p/ICSE2014-docstypes.pdf)

[^mono-vs-micro]: [Roch, Benjamin. "Monolithic kernel vs. Microkernel." TU Wien
  (2004).](https://web.cs.wpi.edu/~cs3013/c12/Papers/Roch_Microkernels.pdf)

