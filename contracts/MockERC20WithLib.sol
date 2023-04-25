pragma solidity 0.8.17;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {MockLibrary} from "./MockLibrary.sol";

contract MockERC20WithLib is ERC20 {
    constructor() ERC20("Mock ERC20", "MOCK") {}

    function callInternalMethod() external view returns (uint256) {
        return MockLibrary.internalMethod();
    }

    function callExternalMethod() external view returns (uint256) {
        return MockLibrary.externalMethod();
    }
}