pragma solidity 0.8.17;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20A is ERC20 {
    constructor() ERC20("Mock ERC20", "MOCK") {}
}