import AromanticFlag from "./flagaromantic.svg";
import AsexualFlag from "./flagasexual.svg";
import BisexualFlag from "./flagbisexual.svg";
import GilbertBakerFlag from "./flaggilbert.svg";
import LesbianFlag from "./flaglesbian.svg";
import NonbinaryFlag from "./flagnonbinary.svg";
import PansexualFlag from "./flagpansexual.svg";
import PolyamorousFlag from "./flagpoly.svg";
import ProgressFlag from "./flagprogress.svg";
import TransFlag from "./flagtrans.svg";

export function PrideFlag({ variant }) {
  const validVariants = {
    aromantic: AromanticFlag,
    aro: AromanticFlag,
    asexual: AsexualFlag,
    ace: AsexualFlag,
    bisexual: BisexualFlag,
    bi: BisexualFlag,
    "gilbert-baker": GilbertBakerFlag,
    gilbert: GilbertBakerFlag,
    lesbian: LesbianFlag,
    nonbinary: NonbinaryFlag,
    nb: NonbinaryFlag,
    pansexual: PansexualFlag,
    pan: PansexualFlag,
    polyamorous: PolyamorousFlag,
    poly: PolyamorousFlag,
    progress: ProgressFlag,
    lgbtq: ProgressFlag,
    lgbt: ProgressFlag,
    transgender: TransFlag,
    trans: TransFlag,
  };

  const safeFlagKey = Object.keys(validVariants).includes(variant) ? variant : "progress";
  const safeFlag = validVariants[safeFlagKey];

  return (
    <img src={safeFlag.src} alt={`${safeFlagKey} pride flag`} className="pride-flag" />
  );
}
